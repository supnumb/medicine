import React from 'react';
import Store from './Reducer';
import { Icon, } from 'rsuite';

class OrderGoodList extends React.Component {
    constructor(props) {
        super(props);

        let { orderGoods } = props;
        this.state = {
            orderGood: null,
            orderGoods: orderGoods || [],
            isFetching: false
        }

        this.onTextChanged = this._onTextChanged.bind(this);
        this.calcGoodSumPrice = this._calcGoodSumPrice.bind(this);
    }

    _calcGoodSumPrice(orderGoods) {
        orderGoods.forEach(og => {
            og.GoodSumPrice = og.Quantity * og.FinalPrice;
        });

        this.setState({ orderGoods });
    }

    _onTextChanged(event, g) {
        const target = event.target;
        const value = target.type === 'checkbox'
            ? target.checked
            : target.value;
        const id = target.id;

        g[id] = value;

        let { orderGoods } = this.state;

        orderGoods.forEach(good => {
            if (good.ID == g.ID) {
                good[id] = value;
            }
        })

        this.calcGoodSumPrice(orderGoods);
    }

    componentWillReceiveProps(nextProps) {
        let { orderGoods } = nextProps;

        if (orderGoods) {
            this.calcGoodSumPrice(orderGoods);
        }
    }

    componentDidMount() {
        let { orderGoods } = this.props;

        if (orderGoods) {
            this.calcGoodSumPrice(orderGoods);
        }
    }

    render() {
        let { orderGood, orderGoods, isFetching } = this.state;

        let loading = isFetching ? (<Icon icon='spinner' spin />) : ("");

        let listJsx = orderGoods.map((og, index) => {

            if (orderGood && orderGood.ID == og.ID) {
                return (<tr key={index}>
                    <td>{og.ID}</td>
                    <td>{og.GoodName || og.Name}</td>
                    <td>{og.Dimension}</td>
                    <td>{og.Unit}</td>
                    <td>
                        <input style={{ "width": "60px" }} id="Price" value={og.DefaultPrice || og.FinalPrice} onChange={(event) => { this.onTextChanged(event, og); }} />
                    </td>
                    <td>
                        <input style={{ "width": "60px" }} id="Quantity" value={og.Quantity} onChange={(event) => {
                            console.log("start");

                            this.onTextChanged(event, og);
                        }} />
                    </td>
                    <td>{og.GoodSumPrice}</td>
                    <td>{og.Manufacturer}</td>
                    <td>
                        <a href="#" onClick={() => {
                            let { orderGoods } = this.state;
                            this.calcGoodSumPrice(orderGoods);
                            this.setState({ orderGood: null });
                        }}>确定</a>
                    </td>
                </tr>);
            } else {
                return (<tr key={index}>
                    <td>{og.GoodID}</td>
                    <td>{og.GoodName || og.Name}</td>
                    <td>{og.Dimension}</td>
                    <td>{og.Unit}</td>
                    <td>{og.DefaultPrice || og.FinalPrice}</td>
                    <td>{og.Quantity}</td>
                    <td>{og.GoodSumPrice}</td>
                    <td>{og.Manufacturer}</td>

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
                        <th>ID</th>
                        <th>药品名</th>
                        <th>规格</th>
                        <th>单位</th>
                        <th>售价</th>
                        <th>数量</th>
                        <th>金额</th>
                        <th>厂家</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {listJsx}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="9" >
                            <button style={{
                                "float": "right"
                            }} onClick={this.props.onShowSelectorZone}>添加药品</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
            {loading}
        </div>)
    }
}

export default OrderGoodList;
