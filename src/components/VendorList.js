import React from 'react';
import Store from './Reducer';

import {Form, Field, createFormControl} from 'form-lib';
import {SchemaModel, StringType} from 'rsuite-schema';

import VendorEditor from './VendorEditor';

class VendorList extends React.Component {
    constructor(props) {
        super(props);

        this.unSubscribe = Store.subscribe(() => {
            let s = Store.getState();
            this.setState(s);
        });

        this.state = Store.getState();

        this.loadVendorsFromDB = this._loadVendorsFromDB.bind(this);
        this.onCancel = this._onCancel.bind(this);
        this.onSaveCompleted = this._onSaveCompleted.bind(this);
    }

    _onCancel() {
        Store.dispatch({type: "CHECKED_NONE"});
    }

    _onSaveCompleted() {
        this.loadVendorsFromDB();
    }

    _loadVendorsFromDB() {
        Store.dispatch({type: "FETCH_VENDORS"});

        let formData = new FormData();

        formData.append("KeyWord", "");
        formData.append("Page", 0);
        formData.append("Limit", 10);

        fetch('/api/vendor/search', {
            body: formData,
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin'
        }).then(res => res.json()).then(json => {
            console.log(json);
            if (json.code == 0) {
                Store.dispatch({type: "FETCH_VENDORS_DONE", payload: json.data})
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    componentDidMount() {
        this.loadVendorsFromDB();
    }

    componentWillUnmount() {
        this.unSubscribe();
    }

    render() {
        let {
            vendorList: {
                vendors,
                vendor,
                isFetching
            }
        } = this.state;

        let editorJsx = ("");
        if (vendor) {
            editorJsx = (<div className="col-md-5">
                <VendorEditor vendor={vendor} onSaveCompleted={this.onSaveCompleted} onCancel={this.onCancel}/>
            </div>)
        }

        let listJsx = vendors.map((v, index) => {
            return (<tr key={index}>
                <td>{v.Name}</td>
                <td>{v.Telephone}</td>
                <td>{v.Address}</td>
                <td>{v.Contact}</td>
                <td>{v.Remark}</td>
                <td>{v.UpdateTime}</td>
                <td>
                    <a href="#" onClick={() => {
                            Store.dispatch({type: "CHECKED_VENDOR", payload: v})
                        }}>编辑</a>
                </td>
            </tr>);
        })

        return (<div id="VendorList">
            <div className="col-md-6 col-md-offset-1 main">
                <div id="page_title">
                    <h4>供应商管理</h4>
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
                                <button onClick={this.submit} className="btn btn-primary">
                                    查询
                                </button>
                                &nbsp;&nbsp;
                                <button className="btn btn-default">添加供应商</button>
                            </div>
                        </Form>
                    </div>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>供应商名</th>
                            <th>电话</th>
                            <th>地址</th>
                            <th>联系人</th>
                            <th>备注</th>
                            <th>创建时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listJsx}
                    </tbody>
                </table>

                <nav aria-label="Page navigation">
                    <ul class="pagination">
                        <li>
                            <a href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">1</a>
                        </li>
                        <li>
                            <a href="#">2</a>
                        </li>
                        <li>
                            <a href="#">3</a>
                        </li>
                        <li>
                            <a href="#">4</a>
                        </li>
                        <li>
                            <a href="#">5</a>
                        </li>
                        <li>
                            <a href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            {editorJsx}
        </div>)
    }
}

export default VendorList;
