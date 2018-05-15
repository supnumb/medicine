import React from 'react';

class ReceiptGoodList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            receiptGood: null
        }
    }

    componentDidMount() {}

    render() {
        let {goods} = this.props;
        let {receiptGood} = this.state;

        let jsx = goods.map((g, index) => {

            if (receiptGood && receiptGood.ID == g.ID) {
                return (<tr key={index}>
                    <td>{g.GoodID}</td>
                    <td>{g.Name}</td>
                    <td><input style={{"width":"80px"}} type="text" id="ExpiredDate" value={g.ExpiryDate} placeholder="有效期"/>
                    </td>
                    <td><input style={{"width":"60px"}} type="text" id="CostPrice" value={g.CostPrice} placeholder="成本价"/></td>
                    <td><input style={{"width":"60px"}} type="text" id="Amount" value={g.Amount} placeholder="金额"/></td>
                    <td><input style={{"width":"80px"}} type="text" id="BatchNo" value={g.BatchNo} placeholder="批号"/></td>
                    <td>
                        <a href="#" onClick={() => {}}>保存</a>
                    </td>
                </tr>);

            } else {
                return (<tr key={index}>
                    <td>{g.GoodID}</td>
                    <td>{g.Name}</td>
                    <td>
                        {g.ExpiryDate}</td>
                    <td>{g.CostPrice}</td>
                    <td>{g.Amount}</td>
                    <td>{g.BatchNo}</td>
                    <td>
                        <a href="#" onClick={() => {
                                this.setState({receiptGood:g})
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
            </table>
        </div>);
    }
}

export default ReceiptGoodList;
