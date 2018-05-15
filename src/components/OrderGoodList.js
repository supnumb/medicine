import React from 'react';
import Store from './Reducer';

class OrderGoodList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orderGood: null

        }

        this.loadOrderGoodsFromDB = this._loadOrderGoodsFromDB.bind(this);
    }

    _loadOrderGoodsFromDB(order) {
        Store.dispatch({type: "FETCH_ORDER_GOODS"})

        let formData = new FormData();
        formData.append("orderid", order.ID);

        fetch('/api/order/goods', {
            body: formData,
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin'
        }).then(res => res.json()).then(json => {

            console.log({json});

            if (json.code == 0) {
                Store.dispatch({type: "FETCH_ORDER_GOODS_DONE", payload: json.data});
            }
        }).catch(err => {
            console.error(err);
        })
    }

    componentDidMount() {
        let {order} = this.props;
        console.log({order});
        if (order) {
            this.loadOrderGoodsFromDB(order);
        }
    }

    render() {
        let {orderGoods} = this.props;
        let {orderGood} = this.state;

        let listJsx = orderGoods.map((og, index) => {

            if (orderGood && orderGood.ID == og.ID) {
                return (<tr key={index}>
                    <td>{og.GoodName}</td>
                    <td>{og.OfficalName}</td>
                    <td>{og.Dimension}</td>
                    <td>{og.Unit}</td>
                    <td>
                        <input id="Price" value={og.DefaultPrice}/>
                    </td>
                    <td>
                        <input id="Quantity" value={og.Quantity}/>
                    </td>
                    <td>{og.TotalCostPrice}</td>
                    <td>
                        <a href="#" onClick={() => {
                                this.setState({orderGood: null})
                            }}>确定</a>
                    </td>
                </tr>);
            } else {
                return (<tr key={index}>
                    <td>{og.GoodName}</td>
                    <td>{og.OfficalName}</td>
                    <td>{og.Dimension}</td>
                    <td>{og.Unit}</td>
                    <td>{og.DefaultPrice}</td>
                    <td>{og.Quantity}</td>
                    <td>{og.TotalCostPrice}</td>
                    <td>
                        <a href="#" onClick={() => {
                                this.setState({orderGood: og})
                            }}>编辑</a>
                    </td>
                </tr>);
            }
        })

        return (<div id="OrderGoodList">
            <table className="table">
                <thead>
                    <tr>
                        <th>药品名</th>
                        <th>通用名</th>
                        <th>规格</th>
                        <th>单位</th>
                        <th>售价</th>
                        <th>数量</th>
                        <th>金额</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {listJsx}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="8" >
                            <button style={{
                                    "float" : "right"
                                }}>添加药品</button>
                        </td>
                    </tr>
                </tfoot>
            </table>

        </div>)
    }
}

export default OrderGoodList;
