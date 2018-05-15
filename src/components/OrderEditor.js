import React from 'react';
import Store from './Reducer';

import {Form, Field, createFormControl} from 'form-lib';
import {SchemaModel, StringType} from 'rsuite-schema';

import GoodList from './GoodList';
import OrderGoodList from './OrderGoodList';

const model = SchemaModel({Name: StringType().isRequired('角色名不能为空')});

class OrderEditor extends React.Component {
    constructor({location, props}) {
        super(props);

        this.unSubscribe = Store.subscribe(() => {
            let s = Store.getState();
            this.setState(s);
        });

        this.state = Store.getState();

        this.loadOrderGoodsFromDB = this._loadOrderGoodsFromDB.bind(this);
    }

    _loadOrderGoodsFromDB(order) {
        Store.dispatch({type: "FETCH_ORDER"})

        fetch('/api/order/info', {
            body: JSON.stringify({ID: order.ID}),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {

            if (json.code == 0) {
                Store.dispatch({type: "FETCH_ORDER_DONE", payload: json});
            }
        }).catch(err => {
            console.error(err);
        })
    }

    componentDidMount() {
        let {order} = this.props;

        let {location: {
                state
            }} = this.props;

        console.log({state});

        if (state) {
            this.loadOrderGoodsFromDB(state);
            Store.dispatch({type: "SET_CHECKED_ORDER", payload: state})
            console.log(state);
        }
    }

    render() {
        let {
            orderEditor: {
                values,
                errors,
                order,
                orderGoods
            }
        } = this.state;

        return (<div id="OrderEditor">

            <div className="col-md-7 col-md-offset-1 main">
                <h4>销售订单编辑</h4>

                <Form className="form-horizontal" ref={ref => this.form = ref} values={values} id="form" model={model} onChange={(values) => {
                        this.setState({values});
                        this.form.cleanErrors();
                    }} onCheck={(errors) => {
                        this.setState({errors})
                    }}>

                    <div className="form-group">
                        <label className="control-label col-md-2">
                            客户&nbsp;<span className="red">*</span>
                        </label>
                        <div className="col-md-4">
                            <Field name="Name" id="Name"/>
                        </div>
                        <p className="text-danger">{errors.Name}</p>
                    </div>

                    <div className="form-group">
                        <label className="col-md-2 control-label">
                            电话&nbsp;<span className="red">*</span>
                        </label>
                        <div className="col-md-4">
                            <Field name="MobilPhone" type="tel" placeholder="电话" id="MobilPhone"/>
                        </div>
                        <p className="text-danger">{errors.MobilPhone}</p>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-md-2">
                            地址&nbsp;<span className="red">*</span>
                        </label>
                        <div className="col-md-4">
                            <Field name="Address" id="Address" placeholder="地址"/>
                        </div>
                        <p className="text-danger">{errors.Address}</p>
                    </div>

                    {/* <div className="form-group">
                        <label className="control-label col-md-2">
                            患者关系&nbsp;
                        </label>
                        <p className="col-md-4">
                            {values.Relationship}
                        </p>
                        <p className="text-danger">{errors.Address}</p>
                    </div> */
                    }

                    <div className="form-group">
                        <label className="control-label col-md-2">
                            付款方式&nbsp;<span className="red">*</span>
                        </label>
                        <div className="col-md-8">
                            <label class="radio-inline">
                                <input type="radio" name="PayStyle" id="PayStyle" value="1"/>
                                微信
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="PayStyle" id="PayStyle" value="2"/>
                                支付宝
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="PayStyle" id="PayStyle" value="3"/>
                                现金
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="PayStyle" id="PayStyle" value="4"/>
                                货到付款
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="PayStyle" id="PayStyle" value="5"/>
                                二维码
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-md-2">
                            快递公司
                        </label>
                        <div className="col-md-4">
                            <Field name="DeliveryCompany" id="DeliveryCompany"/>
                        </div>
                        <p className="text-danger">{errors.DeliveryCompany}</p>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-md-2">
                            快递费用
                        </label>
                        <div className="col-md-4 ">
                            <Field name="DeliveryFee" id="DeliveryFee"/>
                        </div>
                        <Field type="hidden" className="" name="ID"></Field>
                        <p className="text-danger">{errors.DeliveryFee}</p>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-md-2">
                            销售员
                        </label>
                        <div className="col-md-4">
                            <Field name="Name" id="Name"/>
                        </div>
                        <p className="text-danger">{errors.Name}</p>
                    </div>

                    <div className="form-group">
                        <label className=" col-md-2"></label>
                        <div className="col-md-4">
                            <button className="btn btn-info btn-sm">打印小票</button>
                            &nbsp;&nbsp;
                            <button className="btn btn-info btn-sm">打印快递单</button>
                        </div>
                    </div>

                    <hr/>
                    <OrderGoodList orderGoods={orderGoods}/>

                    <hr/>
                    <div className="form-group">
                        <div className="col-md-4">
                            <button className="btn btn-primary">保存销售单</button>
                            &nbsp;&nbsp;
                        </div>
                    </div>

                </Form>

            </div>
        </div>);
    }
}

export default OrderEditor;
