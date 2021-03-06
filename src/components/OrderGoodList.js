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
        let val = value;

        console.log({ id, val });

        let { orderGoods } = this.state;
        g[id] = val;

        if (!/^[\+\-]?\d+$/.test(val)) {

            this.setState({ orderGood: g })
            return;
        }

        console.log(true);

        orderGoods.forEach(good => {
            if (good.ID == g.ID) {
                good[id] = Number.parseFloat(val);
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

        console.log({ orderGood });

        let listJsx = orderGoods.map((og, index) => {

            //删除的商品
            if (og.Flag == -1) {
                return;
            }

            if (orderGood && orderGood.ID == og.ID) {
                return (<tr key={index}>
                    <td>{og.GoodID}</td>
                    <td>{og.GoodName || og.Name}</td>
                    <td>{og.Dimension}</td>
                    <td>{og.Unit}</td>
                    <td>{og.Manufacturer}</td>
                    <td>
                        <input style={{ "width": "60px" }} id="FinalPrice" value={og.FinalPrice} onChange={(event) => { this.onTextChanged(event, og); }} />
                    </td>
                    <td>
                        <input style={{ "width": "60px" }} id="Quantity" value={og.Quantity} onChange={(event) => {
                            this.onTextChanged(event, og);
                        }} />
                    </td>
                    <td>{og.GoodSumPrice}</td>
                    <td>
                        <button onClick={() => {
                            let { orderGoods } = this.state;

                            let flag = false;
                            let cgood = null;
                            orderGoods.forEach(g => {
                                if (!/^\d+(\.\d{1,2})?$/.test(g.FinalPrice) || !/^[\+\-]?\d+$/.test(g.Quantity)) {
                                    cgood = g;
                                    flag = true;
                                    return true;
                                }
                            })

                            if (flag) {
                                alert(`ID为${cgood.ID}的药品价格或数量录入有误[药品数量为正负整数，价格为正数]，请重新检查`);
                                return;
                            }

                            this.calcGoodSumPrice(orderGoods);
                            this.setState({ orderGood: null });
                        }}>确定</button>
                    </td>
                </tr>);
            } else {
                return (<tr key={index}>
                    <td>{og.GoodID}</td>
                    <td>{og.GoodName || og.Name}</td>
                    <td>{og.Dimension}</td>
                    <td>{og.Unit}</td>
                    <td>{og.Manufacturer}</td>
                    <td>{og.FinalPrice}</td>
                    <td>{og.Quantity}</td>
                    <td>{og.GoodSumPrice}</td>

                    <td>
                        <button onClick={() => {
                            this.setState({ orderGood: og })
                        }}>编辑</button>
                        <br />
                        <button onClick={() => {
                            og.Flag = -1;
                            this.setState({ orderGood: null })
                        }}>删除</button>
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
                        <th>厂家</th>
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
