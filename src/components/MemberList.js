import React from 'react';
import Store from './Reducer';

import {Form, Field, createFormControl} from 'form-lib';
import {SchemaModel, StringType} from 'rsuite-schema';

class MemberList extends React.Component {
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
        return (<div id="MemberList" className="col-md-10 col-md-offset-1 main">
            <div id="page_title">
                <h4>会员管理</h4>
                <div className="fun_zone">
                    <Form className="form-inline" ref={ref => this.form = ref} id="form" onChange={(values) => {
                            this.setState({role: values});
                            this.form.cleanErrors();
                        }} onCheck={(errors) => {
                            this.setState({errors})
                        }}>
                        <div className="form-group">
                            <Field name="Name" id="Name"/>
                            &nbsp;&nbsp;
                            <button onClick={this.submit} className="btn btn-default">
                                查询
                            </button>
                        </div>
                    </Form>
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>客人姓名</th>
                        <th>城市</th>
                        <th>性别</th>
                        <th>电话</th>
                        <th>微信号</th>
                        <th>和谁好友</th>
                        <th>意向单</th>
                        <th>回访</th>
                        <th>疾病</th>
                        <th>年代</th>
                        <th>备注</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
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
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>)
    }
}

export default MemberList;
