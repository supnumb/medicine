import React from 'react';

import { Form, Field, createFormControl } from 'form-lib';
import { SchemaModel, StringType } from 'rsuite-schema';
import { DatePicker, SelectPicker, AutoComplete, Icon } from 'rsuite';
import Moment from 'moment';
import { asyncContainer, Typeahead } from 'react-bootstrap-typeahead';
const AsyncTypeahead = asyncContainer(Typeahead);

const model = SchemaModel({ VendorName: StringType().isRequired('请选择供应商') });

import ReceiptGoodList from './ReceiptGoodList';
import GoodSelector from './GoodSelector';

import store from './Reducer';

/**
 * 进货单详情管理
 * @extends React.Component
 */
class ReceiptEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFetching: false,
            receipt: null,
            values: {},
            errors: {},
            receiptGoods: [],
            employees: [],
            vendors: [],
            isShowGoodSelector: false,
            message: ""
        };

        this.loadReceiptDetailFromDB = this._loadReceiptDetailFromDB.bind(this);
        // this.loadEmployeesFromDB = this._loadEmployeesFromDB.bind(this);
        this.loadVendorListFromDB = this._loadVendorListFromDB.bind(this);
        this.onSelectVendor = this._onSelectVendor.bind(this);
        // this.onEmployeeSelect = this._onEmployeeSelect.bind(this);
        this.onGoodSelectorChanged = this._onGoodSelectorChanged.bind(this);
        this.submitReceipt = this._submitReceipt.bind(this);
    }

    _submitReceipt() {

        console.log(this.form.check());

        if (!this.form.check()) {
            this.setState({ message: "数据格式有错误!" });
            return;
        }

        let { values, receiptGoods, receipt } = this.state;
        let receiptData = Object.assign({}, receipt, values);

        let _amount = 0;
        receiptGoods.forEach(g => {
            _amount += g.Quantity * g.CostPrice;
            g.Amount = g.Quantity * g.CostPrice;
        })

        receiptData.Date = receiptData.Date || Moment();

        receiptData.ReceiptAmount = _amount;
        receiptData.TotalAmount = _amount;
        receiptData.ReceiptGoods = receiptGoods;

        console.log(receiptData);

        fetch('/api/receipt/save', {
            body: JSON.stringify(receiptData),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            console.log(json);

            if (json.code == 0) {

                this.props.history.push({
                    pathname: '/receipts'
                });

                alert("进货单保存成功");
                // Store.dispatch({ type: "SET_FORM_CHECK_RESULT", payload: "" });
            } else {
                alert(json.message)
            }
        }).catch(err => {
            console.error(err);
        })
    }

    _onEmployeeSelect(value, item, event) {
        console.log({ value, item });

        if (value) {
            let { values } = this.state;
            values.EmployeeID = value;
            values.Employee = item.data;
            console.log(values);

            this.setState({ values })
        }

    }

    _onSelectVendor(data) {

        if (data.length > 0) {
            let vendor = JSON.parse(data[0].data);
            let { values } = this.state;
            this.setState({ values: Object.assign({}, values, { VendorName: vendor.Name, VendorID: vendor.ID, Contact: vendor.Contact, Telephone: vendor.Telephone }) });
        }
    }

    _loadVendorListFromDB(keyword) {
        // console.log(keyword);

        let data = { KeyWord: keyword };

        this.setState({ isFetching: true });

        fetch('/api/vendor/search', {
            body: JSON.stringify(data),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            if (json.code == 0) {
                let vendors = json.data.map(v => ({ label: v.Name, value: v.ID, data: JSON.stringify(v) }));
                // let vendors = json.data.map(v => ({ label: v.Name }));
                this.setState({ vendors, isFetching: false });
            } else {
                alert("服务器返回错误", json.message)
                this.setState({ isFetching: false });
            }
        }).catch(err => {
            console.error(err);
        })
    }

    /**
     * 加载所有雇员列表
     */
    // _loadEmployeesFromDB() {

    //     fetch('/api/employee/search', {
    //         method: 'POST',
    //         mode: 'same-origin',
    //         credentials: 'same-origin',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(res => res.json()).then(json => {
    //         // console.log({ json });
    //         if (json.code == 0) {
    //             let employees = json.data.map((e) => ({ "value": e.ID, "label": e.Name, "data": e }));
    //             this.setState({ employees: employees })
    //         } else {
    //             alert(json.message);
    //         }
    //     }).catch(err => {
    //         console.error(err);
    //     })
    // }

    /**
     * 加载进货单的详细信息
     * @param {Object} receipt 进货单简单对象
     */
    _loadReceiptDetailFromDB(receipt) {
        if (receipt.ID <= 0)
            return;

        fetch('/api/receipt/detail', {
            body: JSON.stringify({ ID: receipt.ID }),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            console.log(json);

            if (json.code == 0) {
                json.data.VendorName = json.data.Name;
                this.setState({ receipt: json.data, values: json.data, receiptGoods: json.ReceiptGoodData });
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    componentWillReceiveProps(nextProps) {
        let {
            location: {
                state: receipt
            }
        } = nextProps;

        let {
            location: {
                state: oldReceipt
            }
        } = this.props;
        console.log({ receipt });
        if (oldReceipt) {
            if (receipt && receipt.ID != oldReceipt.ID) {
                this.loadReceiptDetailFromDB(receipt);
                this.setState({ values: receipt, receipt });
            }
        } else if (receipt) {
            this.loadReceiptDetailFromDB(receipt);
            this.setState({ values: receipt, receipt });
        }
    }

    componentDidMount() {
        let {
            location: {
                state: receipt
            }
        } = this.props;

        console.log({ receipt });

        if (receipt) {
            this.setState({ values: receipt });
            this.loadReceiptDetailFromDB(receipt);
        }

        this.loadVendorListFromDB();
        // this.loadEmployeesFromDB();
    }

    _onGoodSelectorChanged(selected) {
        let { receiptGoods } = this.state;

        if (selected) {
            selected.forEach(sg => {
                let isHas = false;
                receiptGoods.forEach(g => {
                    if (g.GoodID == sg.ID) {
                        isHas = true;
                    }
                })

                if (!isHas) {
                    receiptGoods.push({
                        GoodID: sg.ID,
                        Quantity: 1,
                        ExpiryDate: "",
                        BatchNo: "",
                        CostPrice: sg.DefaultCostPrice,
                        Name: sg.Name,
                        OfficalName: sg.OfficalName,
                    });
                }
            })

            this.setState({ receiptGoods });
        }
    }

    render() {
        let { receipt, values, errors, receiptGoods, employees, vendors, isShowGoodSelector, isFetching, message } = this.state;

        console.log({ message });

        let loading = isFetching ? (<Icon icon='spinner' spin />) : ("");

        let goodSelectorJsx = ("");

        if (isShowGoodSelector) {
            goodSelectorJsx = (<GoodSelector onCheckChanged={this.onGoodSelectorChanged} />);
        }

        return (<div id="ReceiptEditor">
            <div className="col-md-6 col-md-offset-1 main">
                <h4>进货单编辑</h4>
                <Form className="form-horizontal" ref={ref => this.form = ref} values={values} id="form" model={model} onChange={(values) => {
                    this.setState({ values });
                    this.form.cleanErrors();
                }} onCheck={(errors) => {
                    this.setState({ errors })
                }}>
                    <div className="form-group">
                        <label className="control-label col-md-2">
                            供应商&nbsp;<span className="red">*</span>
                        </label>
                        <div className="col-md-4">
                            <AsyncTypeahead useCache={true} id="VendorName" name="VendorName" inputProps={{
                                name: "Name",
                                id: "ID"
                            }} defaultInputValue={values.VendorID} value={values.VendorID} placeholder={values.VendorName} onSearch={this.loadVendorListFromDB} labelKey="label" onChange={this.onSelectVendor} isLoading={isFetching} options={vendors} />
                        </div>
                        <p className="text-danger">{errors.VendorName}</p>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-md-2">
                            联系人&nbsp;<span className="red">*</span>
                        </label>
                        <div className="col-md-4">
                            <Field name="Contact" id="Contact" placeholder="联系人" />
                        </div>
                        <p className="text-danger">{errors.Contact}</p>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-md-2">
                            电话&nbsp;<span className="red">*</span>
                        </label>
                        <div className="col-md-4">
                            <Field name="Telephone" id="Telephone" placeholder="电话" />
                        </div>
                        <p className="text-danger">{errors.Telephone}</p>
                    </div>
                    {/* <div className="form-group">
                        <label className="control-label col-md-2">
                            操作员&nbsp;<span className="red">*</span>
                        </label>
                        <div className="col-md-4">
                            <SelectPicker id="EmployeeName" value={values.OperatorID} name="EmployeeName" onSelect={this.onEmployeeSelect} placeholder="请选择销售员" data={employees} />
                        </div>
                        <p className="text-danger">{errors.EmployeeName}</p>
                    </div> */}
                    <div className="form-group">
                        <label className="control-label col-md-2">
                            进货日期&nbsp;<span className="red">*</span>
                        </label>
                        <div className="col-md-4">
                            <DatePicker name="Date" id="Date" value={Moment(values.Date)} onChange={(date) => {
                                let { values } = this.state;
                                values.Date = Moment(date).format("YYYY-MM-DD");
                                console.log(date);
                                this.setState({ values });
                            }} />
                        </div>
                    </div>

                    <ReceiptGoodList goods={receiptGoods} onAddGood={() => {
                        this.setState({ isShowGoodSelector: true })
                    }} />

                    <p className="text-danger">
                        {message}
                    </p>

                    <button className="btn btn-primary" onClick={this.submitReceipt}>保存进货单</button>
                </Form>

            </div>
            <div className="col-md-5">
                {goodSelectorJsx}
            </div>

            {loading}
        </div>)
    }
}

export default ReceiptEditor;
