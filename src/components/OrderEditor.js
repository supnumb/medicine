import React from 'react';
import Store from './Reducer';

import { Form, Field, createFormControl } from 'form-lib';
import { SchemaModel, StringType } from 'rsuite-schema';
import GoodSelector from './GoodSelector';
import OrderGoodList from './OrderGoodList';
import { DatePicker, SelectPicker, AutoComplete, Icon, RadioGroup, Radio } from 'rsuite';
import { asyncContainer, Typeahead } from 'react-bootstrap-typeahead';

const AsyncTypeahead = asyncContainer(Typeahead);
const model = SchemaModel({
    // MemberName: StringType().isRequired('请输入查询客户名称'),
    MobilPhone: StringType().isRequired('请填写客户联系电话'),
    Address: StringType().isRequired('请填写配送地址')
});

class OrderEditor extends React.Component {
    constructor({ location, props }) {
        super(props);

        Store.dispatch({ type: "SWITCH_SELECTOR_SHOW", payload: false })

        this.unSubscribe = Store.subscribe(() => {
            let s = Store.getState();
            this.setState(s);
        });

        this.state = Store.getState();

        this.loadOrderDetailFromDB = this._loadOrderDetailFromDB.bind(this);
        this.onGoodSelectorChanged = this._onGoodSelectorChanged.bind(this);
        this.submitOrder = this._submitOrder.bind(this);
        this.onEmployeeSelect = this._onEmployeeSelect.bind(this);
        this.loadEmployeesFromDB = this._loadEmployeesFromDB.bind(this);
        this.loadMembersFromDB = this._loadMembersFromDB.bind(this);
        this.onSelectMember = this._onSelectMember.bind(this);
    }

    componentWillUnmount() {
        this.unSubscribe();
    }

    componentWillReceiveProps(nextProps) {
        let { order } = nextProps;
        let { order: oldOrder } = this.props;

        if (oldOrder) {
            if (order && order.ID != oldOrder.ID) {
                this.loadOrderDetailFromDB(order);
            }
        } else if (order) {
            this.loadOrderDetailFromDB(order);
        }
    }

    componentDidMount() {
        let { location: {
            state
        } } = this.props;

        Store.dispatch({ type: "SWITCH_SELECTOR_SHOW", payload: false })

        if (state) {
            this.loadOrderDetailFromDB(state);
            Store.dispatch({ type: "SET_CHECKED_ORDER", payload: state })
        } else {
            //新增
            Store.dispatch({
                type: "SET_CHECKED_ORDER", payload: {
                    DeliveryCode: "",
                    DeliveryCompany: "",
                    DeliveryFee: "",
                    orderGoods: [],
                    MobilPhone: "",
                    Address: ""
                }
            });
        }

        this.loadEmployeesFromDB();
    }

    /**
     * 根据先中项，重新修改关联输入值
     * @param {Array} mJson 选中项
     */
    _onSelectMember(mJson) {
        if (mJson.length > 0) {
            let member = JSON.parse(mJson[0].data);

            let { orderEditor: { values } } = this.state;
            let result = Object.assign({}, values, {
                Connact: member.Name,
                Name: member.Name,
                MemberName: member.Name,
                MobilPhone: member.MobilPhone,
                Telephone: member.MobilPhone,
                Address: member.Address,
                MemberID: member.ID
            });

            Store.dispatch({ type: "SET_VALUES", payload: result });
            // this.setState({ values: Object.assign({}, values, vendor) });
        }
    }

    _onEmployeeSelect(value, item, event) {

        if (value) {
            let { orderEditor: { values } } = this.state;

            values.EmployeeID = value;
            values.Employee = item.data;
            console.log(values);

            this.setState({ values })
        }

    }

    _loadMembersFromDB() {
        let params = {
            KeyWord: "",
            MobilPhone: "",
            Page: 0,
            Limit: 20
        }

        let data = {};

        fetch('/api/member/search', {
            body: JSON.stringify(params),
            method: "POST",
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            if (json.code == 0) {
                // console.log(json);
                // let members = json.data.map(v => ({ label: v.Name, value: v.ID, data: JSON.stringify(v) }));
                let members = json.data.map(v => ({ label: v.Name, value: v.ID, data: JSON.stringify(v) }));
                Store.dispatch({ type: "FETCH_MEMBER_DONE", payload: members })
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    /**
      * 加载所有雇员列表
      */
    _loadEmployeesFromDB() {

        fetch('/api/employee/search', {
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            // console.log({ json });
            if (json.code == 0) {

                let employees = json.data.map((e) => ({ "value": e.ID, "label": e.Name, "data": e }));
                // console.log(employees);

                Store.dispatch({ type: "FETCH_EMPLOYEE_DONE", payload: employees });
                // this.setState({ employees: employees })
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    _submitOrder() {
        if (!this.form.check()) {
            Store.dispatch({ type: "SET_FORM_CHECK_RESULT", payload: "数据格式有错误!" });
            return;
        }

        let { orderEditor: { values, orderGoods, order } } = this.state;
        let orderData = Object.assign({}, order, values);

        if (!orderData.EmployeeID) {
            Store.dispatch({ type: "SET_FORM_CHECK_RESULT", payload: "请选择销售员!" });
            return;
        }

        Store.dispatch({ type: "FETCH_SUBMIT_ORDER" })

        let _amount = 0;
        orderGoods.forEach(g => {
            _amount = g.Quantity * g.FinalPrice;
        })

        orderData.ReceiptAmount = _amount;
        orderData.TotalAmount = _amount;
        orderData.Goods = orderGoods;

        console.log(JSON.stringify(orderData));

        fetch('/api/order/submit', {
            body: JSON.stringify(orderData),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            console.log(json);

            if (json.code == 0) {
                this.props.history.push('/orders')
            } else {
                alert(json.message)
            }
        }).catch(err => {
            console.error(err);
        });
    }

    _loadOrderDetailFromDB(order) {
        Store.dispatch({ type: "FETCH_ORDER" })

        fetch('/api/order/info', {
            body: JSON.stringify({ ID: order.ID }),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            console.log({ json });

            if (json.code == 0) {
                json.data.MobilPhone = json.data.Telephone;
                Store.dispatch({ type: "FETCH_ORDER_DONE", payload: json });
            }
        }).catch(err => {
            console.error(err);
        });
    }

    _onGoodSelectorChanged(selected) {
        let { orderEditor: { orderGoods } } = this.state;

        selected.forEach(g => {
            let isHas = false;

            orderGoods.forEach((og) => {
                if (og.GoodID == g.ID) {
                    isHas = true;
                }
            });

            if (!isHas) {
                g.GoodID = g.ID;
                g.Quantity = 1;
                g.FinalPrice = g.DefaultPrice;

                orderGoods.push(g);

                Store.dispatch({ type: "GOOD_SELECTOR_CHANGED", payload: orderGoods });
            }
        })
    }

    render() {
        let {
            orderEditor: {
                values,
                errors,
                order,
                orderGoods,
                isShowGoodSearchZone,
                isFetching,
                employees,
                members,
                message
            }
        } = this.state;

        console.log({ values, orderGoods });

        let goodSelector = ("");

        if (isShowGoodSearchZone) {
            goodSelector = (<div className="col-md-5">
                <GoodSelector onCheckChanged={this.onGoodSelectorChanged} />
            </div>);
        }

        return (<div id="OrderEditor">

            <div className="col-md-6 col-md-offset-1 main">
                <h4>销售订单编辑</h4>

                <Form className="form-horizontal" ref={ref => this.form = ref} values={values} id="form" model={model} onChange={(values) => {
                    console.log(values);
                    Store.dispatch({ type: "SET_VALUES", payload: values });
                    this.form.cleanErrors();
                }} onCheck={(errors) => {
                    Store.dispatch({ type: "SET_ERRORS", payload: errors });
                }}>

                    <div className="form-group">
                        <label className="control-label col-md-2">
                            客户名&nbsp;<span className="red">*</span>
                        </label>
                        <div className="col-md-4">
                            <AsyncTypeahead id="MemberName" name="MemberName" inputProps={{
                                name: "Name",
                                id: "ID"
                            }} placeholder={values.MemberName} onSearch={this.loadMembersFromDB} labelKey="label" onChange={this.onSelectMember} isLoading={isFetching} options={members} />

                            <p className="text-danger">{errors.MemberName}</p>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-2 control-label">
                            电话&nbsp;<span className="red">*</span>
                        </label>
                        <div className="col-md-4">
                            <Field name="MobilPhone" type="tel" placeholder="电话" id="MobilPhone" />
                            <p className="text-danger">{errors.MobilPhone}</p>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-md-2">
                            地址&nbsp;<span className="red">*</span>
                        </label>
                        <div className="col-md-4">
                            <Field name="Address" id="Address" placeholder="地址" />
                            <p className="text-danger">{errors.Address}</p>
                        </div>

                    </div>

                    <div className="form-group">
                        <label className="control-label col-md-2">
                            付款方式
                        </label>
                        <div className="col-md-8">
                            <RadioGroup name="PayStyle" value={values.PayStyle} id="PayStyle" inline={true} onChange={
                                (value, event) => {
                                    values.PayStyle = value;
                                    Store.dispatch({ type: "SET_VALUES", payload: values });
                                }
                            }>
                                <Radio value={3}>现金</Radio>
                                <Radio value={6}>刷卡</Radio>
                                <Radio value={5}>二维码</Radio>
                                <Radio value={2}>支付宝</Radio>
                                <Radio value={1}>微信</Radio>
                                <Radio value={7}>公司微信</Radio>
                                <Radio value={8}>网上转账</Radio>
                                <Radio value={4}>货到付款</Radio>
                            </RadioGroup>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-md-2">
                            快递公司
                        </label>
                        <div className="col-md-6">
                            <RadioGroup value={values.DeliveryCompany} name="DeliveryCompany" id="DeliveryCompany" inline={true} onChange={
                                (value, event) => {
                                    // values.PayStyle = value;
                                    // Store.dispatch({ type: "SET_VALUES", payload: values });

                                    values.DeliveryCompany = value;
                                    Store.dispatch({ type: "SET_VALUES", payload: values });
                                }
                            }>
                                <Radio value="未发">未发</Radio>
                                <Radio value="圆通">圆通</Radio>
                                <Radio value="顺丰">顺丰</Radio>
                                <Radio value="韵达">韵达</Radio>
                            </RadioGroup>

                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-md-2">
                            快递单号
                        </label>
                        <div className="col-md-4 ">
                            <Field name="DeliverCode" id="DeliverCode" />
                        </div>
                        <p className="text-danger">{errors.DeliverCode}</p>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-md-2">
                            快递费用
                        </label>
                        <div className="col-md-4 ">
                            <Field name="DeliveryFee" id="DeliveryFee" />
                        </div>
                        <p className="text-danger">{errors.DeliveryFee}</p>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-md-2">
                            代收费用
                        </label>
                        <div className="col-md-4 ">
                            <Field name="DeliverReceiptFee" id="DeliverReceiptFee" />
                        </div>
                        <p className="text-danger">{errors.DeliverReceiptFee}</p>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-md-2">
                            保价费用
                        </label>
                        <div className="col-md-4 ">
                            <Field name="DeliveryInsure" id="DeliveryInsure" />
                        </div>
                        <p className="text-danger">{errors.DeliveryInsure}</p>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-md-2">
                            是否收到
                        </label>
                        <div className="col-md-6">
                            <RadioGroup value={values.DeliveryReceive} name="DeliveryReceive" id="DeliveryReceive" inline={true} onChange={
                                (value, event) => {
                                    values.DeliveryReceive = value;
                                    Store.dispatch({ type: "SET_VALUES", payload: values });

                                    // values.PayStyle = value;
                                    // Store.dispatch({ type: "SET_VALUES", payload: values });
                                    // console.log(value, event);
                                }
                            }>
                                <Radio value={0}>不明确</Radio>
                                <Radio value={1}>未收到</Radio>
                                <Radio value={2}>已经收到</Radio>
                            </RadioGroup>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-md-2">
                            销售员
                        </label>
                        <div className="col-md-4">
                            <SelectPicker id="EmployeeName" name="EmployeeName" onSelect={this.onEmployeeSelect} value={values.EmployeeID} placeholder="请选择销售员" data={employees} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className=" col-md-2"></label>
                        <div className="col-md-4">
                            <button className="btn btn-info btn-sm">打小票</button>
                            &nbsp;&nbsp;
                            <button className="btn btn-info btn-sm">打快递单</button>
                        </div>
                    </div>

                    <hr />
                    <OrderGoodList orderGoods={orderGoods} onShowSelectorZone={() => { Store.dispatch({ type: "SWITCH_SELECTOR_SHOW", payload: true }) }} />

                    <hr />

                    <div className="form-group">

                        <div className="col-md-4">
                            <p className="text-danger">{message}
                            </p>
                            <button className="btn btn-primary" disabled={isFetching} onClick={this.submitOrder}>{isFetching ? "正在保存..." : "保存销售单"}</button>
                            &nbsp;&nbsp;
                        </div>
                    </div>

                </Form>

            </div>

            {goodSelector}

        </div>);
    }
}

export default OrderEditor;
