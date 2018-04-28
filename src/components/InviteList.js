import React from 'react';
import Store from './Reducer';

class InviteList extends React.Component {
    constructor(props) {
        super(props);
        this.unSubscribe = Store.subscribe(() => {
            let s = Store.getState();
            this.setState(s);
        });

        this.state = Store.getState();
    }

    componentDidMount() {}

    render() {
        return (<div id="InviteList" >
            <table className="table">
                <tbody>
                    <tr>
                        <th>客人姓名</th>
                        <th>回访记录</th>
                        <th>时间</th>
                        <th>药师</th>
                        <th>操作</th>
                    </tr>
                    <tr>
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

export default InviteList;
