import React from 'react';
import moment from 'moment';
/**
 * 指定会员的订单列表
 */
class MemberOrderList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { orders: [], isFetching: false, member: null }
        this.loadOrdersFromDB = this._loadOrdersFromDB.bind(this);
    }

    _loadOrdersFromDB(member) {
        let data = { MemberID: member.ID };

        fetch('/api/member/orders', {
            body: JSON.stringify(data),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            if (json.code == 0) {
                this.setState({ orders: json.data })
            } else { alert(json.message) }
        }).catch(err => {
            console.error(err);
        });
    }

    componentDidMount() {

        let { location: {
            state
        } } = this.props;

        this.setState({ member: state });
        this.loadOrdersFromDB(state);
    }


    render() {
        let { orders, member } = this.state;

        let dataJsx = orders.map((o, index) => {
            return (<tr key={index}>
                <td>{moment(o.CreateTime).format("YYYY-MM-DD")}</td>
                <td>{o.GoodName}</td>
                <td>{o.Dimension}</td>
                <td>{o.Manufacturer}</td>
                <td>{o.Unit}</td>
                <td>{o.Quantity}</td>
                <td>{o.FinalPrice}</td>
                <td>{o.Amount}</td>
            </tr>);
        })

        return (<div id='MemberOrderList' className="col-md-10 col-md-offset-1 main">
            <div id="page_title">
                <h4>{member ? member.Name : ""}---会员订单</h4>
            </div>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>销售日期</th>
                        <th>商品名</th>
                        <th>规格</th>
                        <th>生产厂家 </th>
                        <th>单位</th>
                        <th>数量</th>
                        <th>单价</th>
                        <th>金额</th>
                    </tr>
                </thead>
                <tbody>
                    {dataJsx}
                </tbody>
            </table>

        </div>)
    }
}

export default MemberOrderList;