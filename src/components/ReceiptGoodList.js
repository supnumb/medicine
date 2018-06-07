import React from 'react';
import Button from 'rsuite/lib/Button';

import { DatePicker } from 'rsuite';
import Moment from 'moment';

class ReceiptGoodList extends React.Component {
    constructor(props) {
        super(props);

        let { goods } = props;

        this.state = {
            receiptGood: null,
            goods: goods || [],
        }

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

        console.log({ id, value })

        this.setState({ goods });
    }

    componentWillReceiveProps(nextProps) {
        let { goods } = nextProps;
        // console.log({ goods });

        if (goods) {
            goods.forEach(g => {
                if (!g.ExpiredDate) {
                    g.ExpiredDate = Moment().add(90, 'days').calendar();
                }
            });

            this.setState({ goods });

        } else {
            this.setState({ goods: [] });
        }
    }

    componentDidMount() {
        let { goods } = this.props;
        // console.log({ goods });

        if (goods) {
            goods.forEach(g => {
                if (!g.ExpiredDate) {
                    g.ExpiredDate = Moment().add(90, 'days').calendar();
                }
            });

            this.setState({ goods });
        } else {
            this.setState({ goods: [] });
        }
    }

    render() {
        let { receiptGood, goods } = this.state;
        console.log({ receiptGood, goods });

        let jsx = goods.map((g, index) => {

            if (receiptGood && receiptGood.GoodID == g.GoodID) {
                return (<tr key={index}>
                    <td>{g.GoodID} </td>
                    <td>{g.Name}</td>
                    <td>{g.Dimension}</td>
                    <td>{g.Unit}</td>
                    <td>{g.Manufacturer}</td>
                    <td>
                        <DatePicker name="Date" id="Date" value={Moment(g.ExpiredDate)} onChange={(date) => {
                            console.log({ date: Moment(date).format("YYYY-MM-DD") });
                            g.ExpiredDate = Moment(date).format("YYYY-MM-DD");
                            this.setState({ goods });
                        }} placeholder="有效期" />

                    </td>
                    <td>
                        <input onChange={(event) => {
                            this.onTextChanged(event, g);
                        }} style={{ "width": "40px" }} type="text" id="CostPrice" value={g.CostPrice} placeholder="成本价" /></td>
                    <td><input onChange={(event) => {
                        this.onTextChanged(event, g);
                    }} style={{ "width": "40px" }} type="text" id="Quantity" value={g.Quantity} placeholder="数量" /></td>
                    <td><input onChange={(event) => {
                        this.onTextChanged(event, g);
                    }} style={{ "width": "80px" }} type="text" id="BatchNo" value={g.BatchNo} placeholder="批号" /></td>


                    <td>
                        <a href="#" onClick={() => {
                            this.setState({ receiptGood: null })
                        }}>保存</a>
                    </td>
                </tr>);

            } else {
                return (<tr key={index}>
                    <td>{g.GoodID} </td>
                    <td>{g.Name}</td>
                    <td>{g.Dimension}</td>
                    <td>{g.Unit}</td>
                    <td>{g.Manufacturer}</td>
                    <td>{g.ExpiredDate}</td>
                    <td>{g.CostPrice}</td>
                    <td>{g.Quantity}</td>
                    <td>{g.BatchNo}</td>

                    <td>
                        <a href="#" onClick={() => {
                            this.setState({ receiptGood: g })
                        }}>编辑</a>
                    </td>
                </tr>);
            }

        });

        return (<div id="GoodList">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>药品名</th>
                        <th>规格</th>
                        <th>单位</th>
                        <th>厂家</th>
                        <th>有效期</th>
                        <th>进价</th>
                        <th>数量</th>
                        <th>批号</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {jsx}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="11"> <button style={{ "float": "right" }} onClick={() => {
                            if (this.props.onAddGood) {
                                this.props.onAddGood();
                            }
                        }}>添加药品</button></td>
                    </tr>
                </tfoot>
            </table>

        </div>);
    }
}

export default ReceiptGoodList;
