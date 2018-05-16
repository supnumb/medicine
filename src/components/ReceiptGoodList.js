import React from 'react';
import Button from 'rsuite/lib/Button';

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
        console.log({ goods });
        this.setState({ goods: goods || [] });
    }

    componentDidMount() {
        let { goods } = this.props;
        console.log({ goods });

        this.setState({ goods: goods || [] });
    }

    render() {
        let { receiptGood, goods } = this.state;
        console.log({ receiptGood, goods });

        let jsx = goods.map((g, index) => {

            if (receiptGood && receiptGood.ID == g.ID) {
                return (<tr key={index}>
                    <td>{g.Name}</td>
                    <td>{g.OfficalName}</td>
                    <td><input style={{ "width": "80px" }} type="text" id="ExpiredDate" value={g.ExpiryDate} onChange={(event) => {
                        this.onTextChanged(event, g);
                    }} placeholder="有效期" />
                    </td>
                    <td><input onChange={(event) => {
                        this.onTextChanged(event, g);
                    }} style={{ "width": "60px" }} type="text" id="CostPrice" value={g.DefaultCostPrice} placeholder="成本价" /></td>
                    <td><input onChange={(event) => {
                        this.onTextChanged(event, g);
                    }} style={{ "width": "60px" }} type="text" id="Amount" value={g.Amount} placeholder="金额" /></td>
                    <td><input onChange={(event) => {
                        this.onTextChanged(event, g);
                    }} style={{ "width": "80px" }} type="text" id="BatchNo" value={g.BatchNo} placeholder="批号" /></td>
                    <td>
                        <a href="#" onClick={() => { }}>保存</a>
                    </td>
                </tr>);

            } else {
                return (<tr key={index}>
                    <td>{g.Name}</td>
                    <td>{g.OfficalName}</td>
                    <td>{g.ExpiryDate}</td>
                    <td>{g.DefaultCostPrice}</td>
                    <td>{g.Amount}</td>
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
                        <th>药品名</th>
                        <th>通用名</th>
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
                        <td colSpan="7"> <button style={{ "float": "right" }} onClick={() => {
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
