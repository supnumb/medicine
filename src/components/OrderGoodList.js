import React from 'react';
import Store from './Reducer';

class OrderGoodList extends React.Component {
    constructor(props) {
        super(props);

        let { orderGoods } = props;
        this.state = {
            orderGood: null,
            orderGoods: orderGoods || []
        }

        this.loadOrderGoodsFromDB = this._loadOrderGoodsFromDB.bind(this);
        this.onTextChanged = this._onTextChanged.bind(this);
    }

    _onTextChanged(event, g) {
        const target = event.target;
        const value = target.type === 'checkbox'
            ? target.checked
            : target.value;
        const id = target.id;

        g[id] = value;

        let { goods } = this.props;

        goods.forEach(good => {
            if (good.ID == g.ID) {
                good[id] = value;
            }
        })

        this.setState({ goods });
    }

    _loadOrderGoodsFromDB(order) {
        Store.dispatch({ type: "FETCH_ORDER_GOODS" })

        let formData = new FormData();
        formData.append("orderid", order.ID);

        fetch('/api/order/goods', {
            body: formData,
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin'
        }).then(res => res.json()).then(json => {

            console.log({ json });

            if (json.code == 0) {
                Store.dispatch({ type: "FETCH_ORDER_GOODS_DONE", payload: json.data });
            }
        }).catch(err => {
            console.error(err);
        })
    }

    componentWillReceiveProps(nextProps) {
        let { order } = nextProps;
        let { order: oldOrder } = this.props;

        if (oldOrder) {
            if (order && order.ID != oldOrder.ID) {
                this.loadOrderGoodsFromDB(order);
            }
        } else if (order) {
            this.loadOrderGoodsFromDB(order);
        }
    }

    componentDidMount() {
        let { order } = this.props;
        console.log({ order });
        if (order) {
            this.loadOrderGoodsFromDB(order);
        }
    }

    render() {

        let { orderGood, orderGoods } = this.state;

        let listJsx = orderGoods.map((og, index) => {

            if (orderGood && orderGood.ID == og.ID) {
                return (<tr key={index}>
                    <td>{og.GoodName || og.Name}</td>
                    <td>{og.Dimension}</td>
                    <td>{og.Unit}</td>
                    <td>
                        <input style={{ "width": "60px" }} id="Price" value={og.DefaultPrice || og.FinalPrice} onChange={(event) => { this.onTextChanged(event, og); }} />
                    </td>
                    <td>
                        <input style={{ "width": "60px" }} id="Quantity" value={og.Quantity} onChange={(event) => { this.onTextChanged(event, og); }} />
                    </td>
                    <td>{og.TotalCostPrice}</td>
                    <td>
                        <a href="#" onClick={() => {
                            this.setState({ orderGood: null })
                        }}>确定</a>
                    </td>
                </tr>);
            } else {
                return (<tr key={index}>
                    <td>{og.GoodName || og.Name}</td>
                    <td>{og.Dimension}</td>
                    <td>{og.Unit}</td>
                    <td>{og.DefaultPrice || og.FinalPrice}</td>
                    <td>{og.Quantity}</td>
                    <td>{og.TotalCostPrice}</td>
                    <td>
                        <a href="#" onClick={() => {
                            this.setState({ orderGood: og })
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
                                "float": "right"
                            }} onClick={this.props.onShowSelectorZone}>添加药品</button>
                        </td>
                    </tr>
                </tfoot>
            </table>

        </div>)
    }
}

export default OrderGoodList;
