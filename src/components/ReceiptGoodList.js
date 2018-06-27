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
            if (good.GoodID == g.GoodID) {
                good[id] = value;
            }
        })

        console.log({ id, value })

        this.setState({ goods });
    }

    componentWillReceiveProps(nextProps) {
        let { goods } = nextProps;

        if (goods) {
            goods.forEach(g => {
                if (!g.ExpiryDate) {
                    g.ExpiryDate = Moment().add(90, 'days').calendar();
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
                if (!g.ExpiryDate) {
                    g.ExpiryDate = Moment().add(90, 'days').calendar();
                }
            });

            this.setState({ goods });
        } else {
            this.setState({ goods: [] });
        }
    }

    render() {
        let { receiptGood, goods } = this.state;
        let { isEditabled, isReturn } = this.props;
        let desc_text = isEditabled ? (<p className="text-danger">提示：已经结算或销售的进货单，只能退货，不能修改</p>) : ("");

        let jsx = goods.map((g, index) => {

            if (g.Flag == -1) {
                return;
            }

            if (receiptGood && receiptGood.GoodID == g.GoodID) {

                //退货单
                if (isReturn) {
                    return (<tr key={index}>
                        <td>{g.GoodID} </td>
                        <td>{g.Name}</td>
                        <td>{g.Dimension}</td>
                        <td>{g.Manufacturer}</td>
                        <td>
                            <input disabled={isEditabled} onChange={(event) => {
                                this.onTextChanged(event, g);
                            }} style={{ "width": "40px" }} type="text" id="CostPrice" value={g.CostPrice} placeholder="成本价" /></td>

                        <td><input disabled={isEditabled} onChange={(event) => {
                            this.onTextChanged(event, g);
                        }} style={{ "width": "40px" }} type="text" id="Quantity" value={g.Quantity} placeholder="数量" /></td>

                        <td><input disabled={isEditabled} onChange={(event) => {
                            this.onTextChanged(event, g);
                        }} style={{ "width": "80px" }} type="text" id="BatchNo" value={g.BatchNo} placeholder="批号" /></td>

                        <td>
                            <DatePicker name="Date" id="Date" value={Moment(g.ExpiryDate)} onChange={(date) => {
                                g.ExpiryDate = Moment(date).format("YYYY-MM-DD");
                                this.setState({ goods });
                            }} placeholder="有效期" />

                        </td>
                        <td>
                            <DatePicker name="ManufactureDate" id="ManufactureDate" value={Moment(g.ManufactureDate)} onChange={(date) => {
                                g.ManufactureDate = Moment(date).format("YYYY-MM-DD");
                                this.setState({ goods });
                            }} placeholder="生产日期" />

                        </td>

                        <td>
                            <a href="#" onClick={() => {
                                this.setState({ receiptGood: null })
                            }}>确定</a>

                        </td>
                    </tr>)
                } else {
                    return (<tr key={index}>
                        <td>{g.GoodID} </td>
                        <td>{g.Name}</td>
                        <td>{g.Dimension}</td>
                        <td>{g.Manufacturer}</td>
                        <td>
                            <input disabled={isEditabled} onChange={(event) => {
                                this.onTextChanged(event, g);
                            }} style={{ "width": "40px" }} type="text" id="CostPrice" value={g.CostPrice} placeholder="成本价" /></td>

                        <td><input disabled={isEditabled} onChange={(event) => {
                            this.onTextChanged(event, g);
                        }} style={{ "width": "40px" }} type="text" id="Quantity" value={g.Quantity} placeholder="数量" /></td>

                        <td><input disabled={isEditabled} onChange={(event) => {
                            this.onTextChanged(event, g);
                        }} style={{ "width": "80px" }} type="text" id="BatchNo" value={g.BatchNo} placeholder="批号" /></td>

                        <td>

                            <DatePicker name="Date" id="Date" value={Moment(g.ExpiryDate)} onChange={(date) => {
                                g.ExpiryDate = Moment(date).format("YYYY-MM-DD");
                                this.setState({ goods });
                            }} placeholder="有效期" />

                        </td>
                        <td>

                            <DatePicker name="ManufactureDate" id="ManufactureDate" value={Moment(g.ManufactureDate)} onChange={(date) => {
                                g.ManufactureDate = Moment(date).format("YYYY-MM-DD");
                                this.setState({ goods });
                            }} placeholder="生产日期" />

                        </td>

                        <td>
                            <a href="#" onClick={() => {
                                this.setState({ receiptGood: null })
                            }}>确定</a>
                        </td>
                    </tr>);
                }
            } else {
                return (<tr key={index}>
                    <td>{g.GoodID} </td>
                    <td>{g.Name}</td>
                    <td>{g.Dimension}</td>
                    <td>{g.Manufacturer}</td>
                    <td>{g.CostPrice}</td>
                    <td>{g.Quantity}</td>
                    <td>{g.BatchNo}</td>
                    <td>{g.ExpiryDate}</td>
                    <td>{g.ManufactureDate}</td>
                    <td>
                        {
                            isEditabled ? ("编辑") : (<a href="#" onClick={() => { this.setState({ receiptGood: g }) }}>编辑</a>)
                        }
                        <br />
                        {
                            isEditabled ? ("删除") : (<a href="#" onClick={() => {
                                g.Flag = -1;
                                // g.Quantity = 0;
                                // g.BatchNo = "";
                                // g.CostPrice = "";
                                // g.ExpiryDate = null;

                                this.setState({ receiptGood: g });
                            }}>删除</a>)
                        }

                    </td>
                </tr>);
            }
        });

        return (<div id="GoodList">
            {desc_text}
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>药名</th>
                        <th>规格</th>
                        <th>厂家</th>
                        <th>进价</th>
                        <th>数量</th>
                        <th>批号</th>
                        <th>有效期</th>
                        <th>生产日期</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {jsx}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="10">
                            {isEditabled ? ("") : (<button style={{ "float": "right" }} onClick={() => {
                                if (this.props.onAddGood) {
                                    this.props.onAddGood();
                                }
                            }}>添加药品</button>)}
                        </td>
                    </tr>
                </tfoot>
            </table>

        </div>);
    }
}

export default ReceiptGoodList;
