import React from 'react';
import Store from './Reducer';

import {Form, Field, createFormControl} from 'form-lib';
import {SchemaModel, StringType} from 'rsuite-schema';

/**
 * 药品列表管理
 * @extends React.Component
 */
class GoodList extends React.Component {
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
        return (<div className="col-md-10 col-md-offset-1 main">
            <div id="page_title">
                <h4>药品管理</h4>
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

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>药品名</th>
                        <th>通用名</th>
                        <th>规格</th>
                        <th>单位</th>
                        <th>默认成本</th>
                        <th>默认售价</th>
                        <th>权限价</th>
                        <th>生产商</th>
                        <th>用法</th>
                        <th>进口</th>
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
                    </tr>
                </tbody>
            </table>
        </div>)
    }
}

export default GoodList;
