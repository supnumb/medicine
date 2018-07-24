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
    MobilPhone: StringType().isRequired('请填写客户联系电话').pattern(/^1[3456789]\d{9}$/, "请检查电话格式"),
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
        this.printDeliverTicket = this._printDeliverTicket.bind(this);
        this.printOrderTicket = this._printOrderTicket.bind(this);
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

        let { action, MemberID } = state;
        Store.dispatch({ type: "SWITCH_SELECTOR_SHOW", payload: false })

        console.log(state);

        //给指定的会员添加销售订单
        if (action == "NEW_ORDER") {
            if (MemberID > 0) {
                this._loadMemberDetailFromDB(MemberID)
            } else {
                // 添加销售订单
                Store.dispatch({
                    type: "SET_CHECKED_ORDER", payload: {
                        DeliveryCode: "",
                        DeliveryCompany: "",
                        DeliveryFee: 0,
                        DeliverReceiptFee: 0,
                        orderGoods: [],
                        MobilPhone: "",
                        Address: "",
                        PayStyle: 3
                    }
                });
            }
        } else if (state) {//修改订单
            this.loadOrderDetailFromDB(state);
            Store.dispatch({ type: "SET_CHECKED_ORDER", payload: state })
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
            values.EmployeeName = item.data.Name;

            this.setState({ values })
        }
    }

    _loadMemberDetailFromDB(memberID) {
        fetch(`/api/member/${memberID}`, {
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            console.log(json);

            if (json.code == 0) {
                let { data } = json;
                let { orderEditor: { values } } = this.state;

                let result = Object.assign({}, values, {
                    Connact: data.Name,
                    Name: data.Name,
                    MemberName: data.Name,
                    MobilPhone: data.MobilPhone,
                    Telephone: data.MobilPhone,
                    Address: data.Address,
                    MemberID: data.ID,
                    DeliveryCode: "",
                    DeliveryCompany: "",
                    DeliveryFee: 0,
                    DeliverReceiptFee: 0,
                    orderGoods: [],
                    PayStyle: 3
                });

                Store.dispatch({ type: "SET_VALUES", payload: result });
            } else { alert(json.message) }
        }).catch(err => {
            console.error(err);
        })
    }

    _loadMembersFromDB(keyword) {
        let params = {
            KeyWord: keyword,
            MobilPhone: "",
        }

        if (this.xhr && this.xhr.readystate != 4) {
            this.xhr.abort();
        }

        this.xhr = $.ajax({
            url: `/api/member/search`,
            type: 'POST',
            data: params,
            success: function (json) {

                if (json.code == 0) {
                    console.log(json);

                    let members = [];
                    if (json.data.length > 0) {
                        members = json.data.map(v => ({ label: `${v.Name}-${v.PinYin}-${v.MobilPhone}`, value: v.ID, data: JSON.stringify(v) }));
                    }

                    console.log({ members });

                    Store.dispatch({ type: "FETCH_MEMBERS_DONE", payload: members })
                }

            }.bind(this)
        });
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

        orderData.Goods = orderGoods;

        // console.log(JSON.stringify(orderData));

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
            Store.dispatch({ type: "FETCH_SUBMIT_ORDER_DONE" })
            if (json.code == 0) {
                this.props.history.push('/orders')
            } else {
                alert(json.message)
            }
        }).catch(err => {
            Store.dispatch({ type: "FETCH_SUBMIT_ORDER_DONE" })
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

    _openPdfAndPrint(url) {
        let wPop = window.open(url, 'wPop');
        wPop.print();
        wPop.close();
    }

    _printOrderTicket(orderid) {

        console.log("打印小票中....", orderid);
        Store.dispatch({ type: "PRINT_ORDER" });

        fetch('/api/order/print_ticket', {
            body: JSON.stringify({ orderid }),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(res => res.json()).then(json => {
            if (json.code == 0) {
                let wPop = window.open(json.data.path);
                // wPop.print();
                // wPop.close();

                Store.dispatch({ type: "PRINT_ORDER_DONE" });
            } else {
                Store.dispatch({ type: "PRINT_ORDER_DONE" });
                alert(json.message)
            }
        }).catch(err => {
            Store.dispatch({ type: "PRINT_ORDER_DONE" });
            console.log(err);
        })
    }

    _printDeliverTicket(orderid) {

        let {
            orderEditor: {
                values
            }
        } = this.state;

        let { MemberName, MobilPhone, Address, DeliveryCompany, EmployeeName } = values;

        console.log(values);

        if (!MemberName || !MobilPhone || !Address) {
            alert("请指定客户信息：客户名、电话、地址");
            return;
        }

        if (!DeliveryCompany) {
            alert("请选择快递公司")
            return;
        }

        if (!EmployeeName) {
            alert("请选择销售员");
            return;
        }

        Store.dispatch({ type: "PRINT_DELIVER_TICKET" });

        fetch('/api/order/print_deliver', {
            body: JSON.stringify({ orderid, MemberName, MobilPhone, Address, DeliveryCompany, EmployeeName }),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(res => res.json()).then(json => {
            if (json.code == 0) {
                let wPop = window.open(json.data.path);
                // wPop.print();
                // Store.dispatch({ type: "PRINT_ORDER_DONE" });
            } else {
                alert(json.message);
            }

            Store.dispatch({ type: "PRINT_DELIVER_DONE" });

        }).catch(err => {
            Store.dispatch({ type: "PRINT_DELIVER_DONE" });
            console.log(err);
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
                message,
                isPrintingOrder, isPrintingDeliverTicket
            }
        } = this.state;

        console.log({ members });

        if (!members && !Object.prototype.toString.call(members) === '[object Array]') {
            members = [];
        }

        let loading = isFetching ? (<Icon icon='spinner' spin />) : ("");

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
                        <div className="col-md-5">
                            <AsyncTypeahead id="MemberName" name="MemberName" inputProps={{
                                name: "Name",
                                id: "ID"
                            }} placeholder={values.MemberName} useCache={true} onSearch={this.loadMembersFromDB} labelKey="label" onChange={this.onSelectMember} isLoading={isFetching} options={members} />

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
                                    values.DeliveryCompany = value;
                                    Store.dispatch({ type: "SET_VALUES", payload: values });
                                }
                            }>
                                <Radio value="圆通">圆通</Radio>
                                <Radio value="中通">中通</Radio>
                                <Radio value="申通">申通</Radio>
                                <Radio value="顺丰">顺丰</Radio>
                                <Radio value="EMS">EMS</Radio>
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
                            税:
                        </label>
                        <div className="col-md-4 ">
                            <Field name="Tax" id="Tax" />
                        </div>
                        <p className="text-danger">{errors.Tax}</p>
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
                            <button className="btn btn-info btn-sm" disabled={isPrintingOrder} onClick={
                                () => this.printOrderTicket(order.ID)
                            }>{isPrintingOrder ? "打印中.." : "打小票"}</button>
                            &nbsp;&nbsp;
                            <button className="btn btn-info btn-sm" disabled={isPrintingDeliverTicket} onClick={
                                () => this.printDeliverTicket(order.ID)
                            }>{isPrintingDeliverTicket ? "打印中.." : "打快递单"}</button>
                        </div>
                    </div>

                    <hr />
                    <OrderGoodList orderGoods={orderGoods} onShowSelectorZone={() => { Store.dispatch({ type: "SWITCH_SELECTOR_SHOW", payload: true }) }} />
                    {loading}
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

        </div >);
    }
}

export default OrderEditor;
