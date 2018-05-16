import React from 'react';

import { Form, Field, createFormControl } from 'form-lib';
import { SchemaModel, StringType } from 'rsuite-schema';
import { DatePicker, SelectPicker, AutoComplete } from 'rsuite';
import Moment from 'moment';
import { asyncContainer, Typeahead } from 'react-bootstrap-typeahead';
const AsyncTypeahead = asyncContainer(Typeahead);

const model = SchemaModel({ Name: StringType().isRequired('角色名不能为空') });

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
            isShowGoodSelector: false
        };

        this.loadReceiptDetailFromDB = this._loadReceiptDetailFromDB.bind(this);
        this.loadEmployeesFromDB = this._loadEmployeesFromDB.bind(this);
        this.loadVendorListFromDB = this._loadVendorListFromDB.bind(this);
        this.onSelectVendor = this._onSelectVendor.bind(this);
        this.onEmployeeSelect = this._onEmployeeSelect.bind(this);
        this.onGoodSelectorChanged = this._onGoodSelectorChanged.bind(this);
    }

    _onEmployeeSelect(value, item, event) {
        console.log({ value, item });

        if (value) {
            let { values } = this.state;
            values.EmployeeName = value;
            values.Employee = item.data;
            console.log(values);

            this.setState({ values })
        }

    }

    _onSelectVendor(data) {

        if (data.length > 0) {
            let vendor = JSON.parse(data[0].data);
            let { values } = this.state;
            this.setState({ values: Object.assign({}, values, vendor) });
        }
    }

    _loadVendorListFromDB() {
        let data = { Keyword: "" };

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
    _loadEmployeesFromDB() {

        fetch('/api/employee/search', {
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            console.log({ json });
            if (json.code == 0) {
                let employees = json.data.map((e) => ({ "value": e.ID, "label": e.Name, "data": e }));
                this.setState({ employees: employees })
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

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
            if (json.code == 0) {
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

        if (receipt) {
            this.loadReceiptDetailFromDB(receipt);
        }

        this.loadVendorListFromDB();
        this.loadEmployeesFromDB();
    }

    _onGoodSelectorChanged(selected) {
        let { receiptGoods } = this.state;

        if (selected) {

            selected.forEach(sg => {
                let isHas = false;
                receiptGoods.forEach(g => {
                    if (g.ID == sg.ID) {
                        isHas = true;
                    }
                })

                if (!isHas) {
                    receiptGoods.push(sg);
                }
            })

            this.setState({ receiptGoods });

        }
    }

    render() {
        let { receipt, values, errors, receiptGoods, employees, vendors, isShowGoodSelector, isFetching } = this.state;

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

                            <AsyncTypeahead inputProps={{
                                name: "Name",
                                id: "ID"
                            }} onSearch={this.loadVendorListFromDB} labelKey="label" onChange={this.onSelectVendor} isLoading={isFetching} options={vendors} />

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
                    <div className="form-group">
                        <label className="control-label col-md-2">
                            销售员&nbsp;<span className="red">*</span>
                        </label>
                        <div className="col-md-4">
                            <SelectPicker id="EmployeeName" name="EmployeeName" onSelect={this.onEmployeeSelect} placeholder="请选择销售员" data={employees} />
                        </div>
                        <p className="text-danger">{errors.EmployeeName}</p>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-md-2">
                            进货日期&nbsp;<span className="red">*</span>
                        </label>
                        <div className="col-md-4">
                            <DatePicker value={Moment()} />
                        </div>
                    </div>

                    <ReceiptGoodList goods={receiptGoods} onAddGood={() => {
                        this.setState({ isShowGoodSelector: true })
                    }} />
                </Form>
            </div>
            <div className="col-md-5">
                {goodSelectorJsx}
            </div>
        </div>)
    }
}

export default ReceiptEditor;
