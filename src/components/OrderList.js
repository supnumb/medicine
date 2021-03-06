import React from 'react';
import Store from './Reducer';
import { withRouter } from 'react-router-dom';
import { Form, Field, createFormControl } from 'form-lib';
import { Icon } from 'rsuite';
import { default as Pager } from './Pager'

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

    _loadOrderListFromDB(event, page = 0, limit = 10) {
        let {
            orderList: {
                KeyWord,
                Page,
                Limit
            }
        } = this.state;

        if (event) {
            KeyWord = $("#KeyWord").val();
            Page = page;
            Limit = limit;
        }

        let postData = { KeyWord, Page, Limit }

        // console.log(postData);

        Store.dispatch({ type: "FETCH_ORDERS", payload: postData });

        fetch('/api/order/search', {
            body: JSON.stringify(postData),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            console.log(json);
            if (json.code == 0) {
                Store.dispatch({ type: "FETCH_ORDERS_DONE", payload: json })
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

    componentWillUnmount() {
        this.unSubscribe();
    }

    render() {
        let {
            orderList: {
                orders,
                order,
                isFetching,
                Total,
                Page,
                Limit
            }
        } = this.state;

        // console.log({ Page, Limit, Total });

        let loading = isFetching ? (<Icon icon='spinner' spin />) : ("");

        let mListJsx = ("")

        if (orders) {
            mListJsx = orders.map((o, index) => (<tr key={index}>
                <td>{o.ID}</td>
                <td>{o.Name}</td>
                <td>{o.MobilPhone}</td>
                <td>{o.GoodNames}</td>
                <td>{o.TotalAmount}</td>
                <td>{o.PayStyleLabel}</td>
                <td>{o.DeliveryCompany}</td>
                <td>{o.DeliveryFee}</td>
                <td>{o.DeliverCode}</td>
                <td>{o.DeliverReceiptFee}</td>
                <td>{o.DeliveryReceiveLabel}</td>
                <td>{o.EmployeeName}</td>
                <td>{o.Date}</td>

                <td style={{
                    "width": "80px"
                }}>
                    <button className="btn-link" onClick={() => {
                        this.props.history.push({ pathname: "/order/editor", state: o })
                        // Store.dispatch({type: "EDITOR_MEMBER", payload: o})
                    }}>编辑</button>
                </td>
            </tr>));
        }

        return (<div id="OrderList" className="col-md-10 col-md-offset-1 main">

            <div id="page_title">
                <h4>销售订单管理</h4>
                <div className="fun_zone">
                    <Form className="form-inline" ref={ref => this.form = ref} id="form" onChange={(values) => {
                        this.setState({ role: values });
                        this.form.cleanErrors();
                    }} onCheck={(errors) => {
                        this.setState({ errors })
                    }}>
                        <div className="form-group">
                            <Field name="KeyWord" id="KeyWord" />
                            &nbsp;&nbsp;
                            <button onClick={this.loadOrderListFromDB} className="btn btn-primary">
                                查询
                            </button>
                            &nbsp;
                            &nbsp;
                            <button onClick={() => {
                                this.props.history.push({ pathname: "/order/editor", state: { action: "NEW_ORDER" } })
                            }} className="btn btn-default">
                                添加销售订单
                            </button>
                        </div>
                    </Form>
                </div>
            </div>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>客人姓名</th>
                        <th>电话</th>
                        <th>药品</th>
                        <th>金额</th>
                        <th>付款方式</th>
                        <th>快递公司</th>
                        <th>快递费</th>
                        <th>快递单</th>
                        <th>代收</th>
                        <th>是否收到</th>
                        <th>销售员</th>
                        <th>日期</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {mListJsx}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={14}>
                            <Pager start={Page} length={Limit} total={Total} onPageChanged={({ start, length }) =>
                                this.loadOrderListFromDB("PAGE", start, length)
                            } />
                        </td>
                    </tr>
                </tfoot>
            </table>
            {loading}
        </div>)
    }
}

export default withRouter(OrderList);
