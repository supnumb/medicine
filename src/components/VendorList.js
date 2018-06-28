import React from 'react';
import Store from './Reducer';

import { Form, Field, createFormControl } from 'form-lib';
import { SchemaModel, StringType } from 'rsuite-schema';

import VendorEditor from './VendorEditor';
import { default as Pager } from './Pager'

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
        Store.dispatch({ type: "CHECKED_NONE" });
    }

    _onSaveCompleted() {
        this.loadVendorsFromDB();
    }

    _loadVendorsFromDB(event, page = 0, limit = 10) {

        let {
            vendorList: {
                KeyWord,
                Page,
                Limit
            }
        } = this.state;

        if (event) {
            KeyWord = $("#Keyword").val();
            Page = page;
            Limit = limit;
        }

        Store.dispatch({ type: "FETCH_VENDORS", payload: { KeyWord, Page, Limit } });

        fetch('/api/vendor/search', {
            body: JSON.stringify({ KeyWord, Page, Limit }),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            // console.log(json);
            if (json.code == 0) {
                Store.dispatch({ type: "FETCH_VENDORS_DONE", payload: json })
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
                isFetching,
                Page,
                Limit,
                Total
            }
        } = this.state;

        // console.log({ Page, Limit, Total });

        let editorJsx = ("");
        if (vendor) {
            editorJsx = (<div className="col-md-5">
                <VendorEditor vendor={vendor} onSaveCompleted={this.onSaveCompleted} onCancel={this.onCancel} />
            </div>)
        }

        let listJsx = vendors.map((v, index) => {
            return (<tr key={index}>
                <td>{v.ID}</td>
                <td>{v.Name}</td>
                <td>{v.Telephone}</td>
                <td>{v.Address}</td>
                <td>{v.Contact}</td>
                <td>{v.Remark}</td>
                <td>{v.UpdateTime}</td>
                <td>
                    <a href="#" onClick={() => {
                        Store.dispatch({ type: "CHECKED_VENDOR", payload: v })
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
                            this.setState({ role: values });
                            this.form.cleanErrors();
                        }} onCheck={(errors) => {
                            this.setState({ errors })
                        }}>
                            <div className="form-group">
                                <Field name="Keyword" id="Keyword" />
                                &nbsp;&nbsp;
                                <button onClick={this.loadVendorsFromDB} className="btn btn-primary">
                                    查询
                                </button>
                                &nbsp;&nbsp;
                                <button className="btn btn-default" onClick={() => { Store.dispatch({ type: "CHECKED_VENDOR", payload: { ID: -1 } }) }}>添加供应商</button>
                            </div>
                        </Form>
                    </div>
                </div>

                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
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
                    <tfoot>
                        <tr>
                            <td colSpan={8}>
                                <Pager start={Page} length={Limit} total={Total} onPageChanged={({ start, length }) =>
                                    this.loadVendorsFromDB("PAGE", start, length)
                                } />
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            {editorJsx}
        </div>)
    }
}

export default VendorList;
