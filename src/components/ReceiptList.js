import React from 'react';
import Store from './Reducer';

import {Form, Field, createFormControl} from 'form-lib';
import {SchemaModel, StringType} from 'rsuite-schema';

class ReceiptList extends React.Component {
    constructor(props) {
        super(props);

        this.unSubscribe = Store.subscribe(() => {
            let s = Store.getState();
            this.setState(s);
        });

        this.state = Store.getState();

        this.loadReceiptsFromDB = this._loadReceiptsFromDB.bind(this);
    }

    _loadReceiptsFromDB() {
        Store.dispatch({type: "FETCH_RECEIPTS"});

        let formData = new FormData();

        formData.append("KeyWord", "");
        formData.append("Page", 0);
        formData.append("Limit", 10);

        fetch('/api/receipt/search', {
            body: formData,
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin'
        }).then(res => res.json()).then(json => {
            console.log(json);
            if (json.code == 0) {
                Store.dispatch({type: "FETCH_RECEIPTS_DONE", payload: json.data})
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    componentDidMount() {
        this.loadReceiptsFromDB();
    }

    componentUnMount() {
        this.unSubscribe();
    }

    render() {

        let {
            receiptList: {
                receipts,
                receipt,
                isFetching
            }
        } = this.state;

        let listJsx = receipts.map((r, index) => (<tr key={index}>
            <td>{r.Name}</td>
            <td>{r.Name}</td>
            <td>{r.Name}</td>
            <td>{r.Name}</td>
            <td>{r.Name}</td>
            <td>{r.Name}</td>
            <td>{r.Name}</td>
        </tr>));

        return (<div id="ReceiptList" className="col-md-10 col-md-offset-1 main">
            <div id="page_title">
                <h4>进货单管理</h4>
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
                        <th>供应商</th>
                        <th>电话</th>
                        <th>联系人</th>
                        <th>日期</th>
                        <th>金额</th>
                        <th>药师</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {listJsx}
                </tbody>
            </table>
        </div>)
    }
}

export default ReceiptList;
