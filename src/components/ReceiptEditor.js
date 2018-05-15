import React from 'react';

import {Form, Field, createFormControl} from 'form-lib';
import {SchemaModel, StringType} from 'rsuite-schema';
import { DatePicker } from 'rsuite';
import Moment from 'moment';

const model = SchemaModel({Name: StringType().isRequired('角色名不能为空')});

import ReceiptGoodList from './ReceiptGoodList';

/**
 * 进货单详情管理
 * @extends React.Component
 */
class ReceiptEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            receipt: null,
            values: {},
            errors: {},
            receiptGoods: []
        };

        this.loadReceiptDetailFromDB = this._loadReceiptDetailFromDB.bind(this);
    }

    _loadReceiptDetailFromDB(receipt) {

        console.log(receipt);

        fetch('/api/receipt/detail', {
            body: JSON.stringify({ID: receipt.ID}),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            console.log(json);
            if (json.code == 0) {
                this.setState({receipt: json.data, values: json.data, receiptGoods: json.ReceiptGoodData});
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

        console.log(receipt);

        if (oldReceipt) {
            if (receipt && receipt.ID != oldReceipt.ID) {
                this.loadReceiptDetailFromDB(receipt);
                this.setState({values: receipt, receipt});
            }
        } else if (receipt) {
            this.loadReceiptDetailFromDB(receipt);
            this.setState({values: receipt, receipt});
        }
    }

    componentDidMount() {

        let {
            location: {
                state: receipt
            }
        } = this.props;

        console.log(receipt);

        if (receipt) {
            this.loadReceiptDetailFromDB(receipt);
        }
    }

    render() {
        let {receipt, values, errors, receiptGoods} = this.state;

        return (<div id="ReceiptEditor">
            <div className="col-md-6 col-md-offset-1 main">
                <h4>进货单编辑</h4>
                <Form className="form-horizontal" ref={ref => this.form = ref} values={values} id="form" model={model} onChange={(values) => {
                        this.setState({values});
                        this.form.cleanErrors();
                    }} onCheck={(errors) => {
                        this.setState({errors})
                    }}>
                    <div className="form-group">
                        <label className="control-label col-md-2">
                            供应商&nbsp;<span className="red">*</span>
                        </label>
                        <div className="col-md-4">
                            <Field name="VendorName" id="VendorName" placeholder="供应商"/>
                        </div>
                        <p className="text-danger">{errors.VendorName}</p>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-md-2">
                            联系人&nbsp;<span className="red">*</span>
                        </label>
                        <div className="col-md-4">
                            <Field name="Contact" id="Contact" placeholder="联系人"/>
                        </div>
                        <p className="text-danger">{errors.Contact}</p>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-md-2">
                            电话&nbsp;<span className="red">*</span>
                        </label>
                        <div className="col-md-4">
                            <Field name="Telephone" id="Telephone" placeholder="电话"/>
                        </div>
                        <p className="text-danger">{errors.Telephone}</p>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-md-2">
                            销售员&nbsp;<span className="red">*</span>
                        </label>
                        <div className="col-md-4">
                            <Field name="EmployeeName" id="EmployeeName" placeholder="销售员"/>
                        </div>
                        <p className="text-danger">{errors.EmployeeName}</p>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-md-2">
                            进货日期&nbsp;<span className="red">*</span>
                        </label>
                        <div className="col-md-4">
                            <DatePicker   value={Moment()}/>
                            <Field name="Date" id="Date" placeholder="日期"/>
                        </div>
                    </div>

                    <ReceiptGoodList goods={receiptGoods} />
                </Form>
            </div>
        </div>)
    }
}

export default ReceiptEditor;
