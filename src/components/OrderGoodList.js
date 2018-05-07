import React from 'react';
import Store from './Reducer';

class OrderGoodList extends React.Component {
    constructor(props) {
        super(props);

        this.unSubscribe = Store.subscribe(() => {
            let s = Store.getState();
            this.setState(s);
        });

        this.state = Store.getState();

        this.loadOrderGoodsFromDB() = this._loadOrderGoodsFromDB.bind(this);
    }

    _loadOrderGoodsFromDB() {
        let {order} = this.props;

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
                Store.dispatch({type: "", payload: json.data});
            }
        }).catch(err => {
            console.error(err);
        })
    }

    componentDidMount() {}

    render() {

        return (<div id="OrderGoodList">
            <table className="table">
                <tbody>
                    <tr>
                        <th>药品名</th>
                        <th>通用名</th>
                        <th>规格</th>
                        <th>单位</th>
                        <th>成本</th>
                        <th>售价</th>
                        <th>数量</th>
                        <th>金额</th>
                        <th>操作</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>)
    }
}

export default OrderGoodList;
