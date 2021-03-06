import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Field, createFormControl } from 'form-lib';
import { SchemaModel, StringType } from 'rsuite-schema';
import { DatePicker, SelectPicker, AutoComplete, Icon } from 'rsuite';
import Moment from 'moment';
import { asyncContainer, Typeahead } from 'react-bootstrap-typeahead';
import ReceiptGoodList from './ReceiptGoodList';
import GoodSelector from './GoodSelector';
import store from './Reducer';

const AsyncTypeahead = asyncContainer(Typeahead);
const model = SchemaModel({ VendorName: StringType().isRequired('请选择供应商') });
const TextareaField = createFormControl('textarea');

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
            vendors: [{ label: "", value: "" }],
            isShowGoodSelector: false,
            message: "",
            Type: 0  //0 -- 入库单 1 --退货单  2 --调整单
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
        if (!this.form.check()) {
            this.setState({ message: "请检查输入的数据错误!" });
            return;
        }

        let { values, receiptGoods, receipt, Type = 0 } = this.state;
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
        receiptData.Type = Type;

        fetch('/api/receipt/save', {
            body: JSON.stringify(receiptData),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {

            if (json.code == 0) {

                this.props.history.push({
                    pathname: '/receipts'
                });

                alert("进货单据保存成功");
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
            // console.error(err);
            // alert("网络请求中断，请稍后再试"+JSON.stringify(err))
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
                state
            }
        } = this.props;

        if (state) {
            let { receipt, Type } = state;

            if (receipt) {
                this.setState({ values: receipt, Type });
                this.loadReceiptDetailFromDB(receipt);
            } else {
                this.setState({ Type });
            }

            this.loadVendorListFromDB();
        } else {
            this.props.history.push({
                pathname: "/receipts/"
            })
        }
        // this.loadEmployeesFromDB();
    }

    _onGoodSelectorChanged(selected) {
        let { receiptGoods } = this.state;

        if (selected) {
            selected.forEach(sg => {
                // let isHas = false;
                // receiptGoods.forEach(g => {
                //     if (g.GoodID == sg.ID) {
                //         isHas = true;
                //     }
                // })

                receiptGoods.push({
                    GoodID: sg.ID,
                    ValiableQuantity: 1,
                    ExpiryDate: Moment().add(0, 'days').format("YYYY-MM-DD"),
                    ManufactureDate: Moment().format("YYYY-MM-DD"),
                    BatchNo: "",
                    CostPrice: sg.DefaultCostPrice,
                    Name: sg.Name,
                    Dimension: sg.Dimension,
                    Manufacturer: sg.Manufacturer,
                    OfficalName: sg.OfficalName,
                    Flag: 0
                });
            })

            receiptGoods.forEach(g => g.Flag = 0);
            this.setState({ receiptGoods });
        }
    }

    render() {
        let { receipt, values, errors, receiptGoods, employees, vendors, isShowGoodSelector, isFetching, message, Type } = this.state;

        let isEditabled = receipt && (receipt.Status == 1);

        let loading = isFetching ? (<Icon icon='spinner' spin />) : ("");

        let goodSelectorJsx = ("");

        if (isShowGoodSelector) {
            goodSelectorJsx = (<GoodSelector onCheckChanged={this.onGoodSelectorChanged} />);
        }

        return (<div id="ReceiptEditor">
            <div className="col-md-6 col-md-offset-1 main">
                <h4>{["退货单编辑", "进货单编辑", "调整单编辑"][Type]}</h4>
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
                            <AsyncTypeahead disabled={isEditabled} useCache={true} id="VendorName" name="VendorName" inputProps={{
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
                            <Field disabled={isEditabled} name="Contact" id="Contact" placeholder="联系人" />
                        </div>
                        <p className="text-danger">{errors.Contact}</p>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-md-2">
                            电话&nbsp;<span className="red">*</span>
                        </label>
                        <div className="col-md-4">
                            <Field disabled={isEditabled} name="Telephone" id="Telephone" placeholder="电话" />
                        </div>
                        <p className="text-danger">{errors.Telephone}</p>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-md-2">
                            操作日期&nbsp;<span className="red">*</span>
                        </label>
                        <div className="col-md-4">
                            <DatePicker name="Date" placeholder="选择进货日期" id="Date" value={Moment(values.Date)} onChange={(date) => {
                                let { values } = this.state;
                                values.Date = Moment(date).format("YYYY-MM-DD");
                                console.log(date);
                                this.setState({ values });
                            }} />
                        </div>
                    </div>

                    <ReceiptGoodList isEditabled={isEditabled} isReturn={Type == 1} goods={receiptGoods} onAddGood={() => {
                        this.setState({ isShowGoodSelector: true })
                    }} />

                    <div className="form-group">
                        <label className="control-label col-md-2">
                            备注&nbsp;
                        </label>
                        <div className="col-md-10">
                            <Field disabled={isEditabled} name="Remark" id="Remark" placeholder="备注" accepter={TextareaField} />
                        </div>
                        <p className="text-danger">{errors.Remark}</p>
                    </div>

                    {loading}

                    <p className="text-danger">
                        {message}
                    </p>

                    {isEditabled ? ("") : (<button className="btn btn-primary" onClick={this.submitReceipt}>保存单据</button>)}

                </Form>

            </div>
            <div className="col-md-5">
                {goodSelectorJsx}
            </div>

        </div>)
    }
}

export default withRouter(ReceiptEditor);
