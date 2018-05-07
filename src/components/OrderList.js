import React from 'react';
import Store from './Reducer';

import {Form, Field, createFormControl} from 'form-lib';
import {SchemaModel, StringType} from 'rsuite-schema';

/**
 * 销售订单页面
 * @extends React.Component
 */
class OrderList extends React.Component {
    constructor(props) {
        super(props);
        this.unSubscribe = Store.subscribe(() => {
            let s = Store.getState();
            this.setState(s);
        });

        this.state = Store.getState();

        this.loadOrderListFromDB = this._loadOrderListFromDB.bind(this);
        this.onGoOrderEditor = this._onGoOrderEditor.bind(this);

    }

    _onGoOrderEditor(order) {
        this.props.history.push("/order/editor");
    }

    _loadOrderListFromDB() {
        Store.dispatch({type: "FETCH_ORDERS"});

        let formData = new FormData();

        formData.append("keyword", "");
        formData.append("start", 0);
        formData.append("length", 10);

        fetch('/api/order/search', {
            body: formData,
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin'
        }).then(res => res.json()).then(json => {
            console.log(json);
            if (json.code == 0) {
                Store.dispatch({type: "FETCH_ORDERS_DONE", payload: json.data})
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    componentDidMount() {
        this.loadOrderListFromDB();
    }

    componentUnMount() {
        this.unSubscribe();
    }

    render() {
        let {
            orderList: {
                orders,
                order
            }
        } = this.state;

        let mListJsx = orders.map((o, index) => (<tr>
            <td>{o.Name}</td>
            <td></td>
            <td>{o.ReceiptAmount}</td>
            <td></td>
            <td>{o.DeliveryCompany}</td>
            <td>{o.DeliveryFee}</td>
            <td>{o.DeliverCode}</td>
            <td>{o.DeliverReceiptFee}</td>

            <td style={{
                    "width" : "80px"
                }}>
                <button onClick={() => {
                        Store.dispatch({type: "EDITOR_MEMBER", payload: m})
                    }}>编辑</button>
            </td>
        </tr>));

        return (<div id="OrderList" className="col-md-10 col-md-offset-1 main">

            <div id="page_title">
                <h4>销售订单管理</h4>
                <div className="fun_zone">
                    <Form className="form-inline" ref={ref => this.form = ref} id="form" onChange={(values) => {
                            this.setState({role: values});
                            this.form.cleanErrors();
                        }} onCheck={(errors) => {
                            this.setState({errors})
                        }}>
                        <div className="form-group">
                            <Field name="Name" id="Name"/>
                            &nbsp;&nbsp;
                            <button onClick={this.submit} className="btn btn-default">
                                查询
                            </button>
                        </div>
                    </Form>
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>客人姓名</th>
                        <th>药品</th>
                        <th>金额</th>
                        <th>付款方式</th>
                        <th>快递公司</th>
                        <th>快递费</th>
                        <th>快递单</th>
                        <th>代收</th>
                        <th>销售员</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {mListJsx}
                </tbody>
            </table>

        </div>)
    }
}

export default OrderList;
