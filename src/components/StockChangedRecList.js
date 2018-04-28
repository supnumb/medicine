import React from 'react';
import Store from './Reducer';

class StockChangedRecList extends React.Component {
    constructor(props) {
        super(props);

        this.unSubscribe = Store.subscribe(() => {
            let s = Store.getState();
            this.setState(s);
        });

        this.state = Store.getState();
    }

    componentDidMount() {}

    componentUnMount() {
        this.unSubscribe();
    }

    render() {
        return (<div id="StockChangedRecList">
            <table className="table">
                <tbody>
                    <tr>
                        <th>药品名</th>
                        <th>数量</th>
                        <th>变化原因</th>
                        <th>关联对象</th>
                        <th>药师</th>
                        <th>操作</th>
                    </tr>
                    <tr>
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

export default StockChangedRecList;
