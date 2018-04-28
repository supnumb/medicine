import React from 'react';
import Store from './Reducer';



class IntentionList extends React.Component {
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
        return (<div id="IntentionList" className="col-md-10 col-md-offset-1 main">

            <table className="table">
                <tbody>
                <tr>
                    <th>客人姓名</th>
                    <th>意向单详情</th>
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
        </div>);
    }
}

export default IntentionList;
