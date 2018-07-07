import React from 'react';
import Store from './Reducer';
import { Icon, Radio, RadioGroup } from 'rsuite';
import { Form, Field, createFormControl } from 'form-lib';
import { SchemaModel, StringType } from 'rsuite-schema';
import Moment from 'moment';

import ReceiptEditor from './ReceiptEditor';
import { default as Pager } from './Pager'

class ReceiptList extends React.Component {
    constructor(props) {
        super(props);

        this.unSubscribe = Store.subscribe(() => {
            let s = Store.getState();
            this.setState(s);
        });

        this.state = Store.getState();

        this.loadReceiptsFromDB = this._loadReceiptsFromDB.bind(this);
        this.settle = this._settle.bind(this);
    }

    _loadReceiptsFromDB(event, status, page = 0, limit = 10) {

        let {
            receiptList: {
                KeyWord,
                Page,
                Limit,
                Status,
                Total
            }
        } = this.state;

        if (event) {
            KeyWord = $("#Keyword").val();
            Page = page;
            Limit = limit
        }

        Status = status == null ? Status : status;

        let data = {
            KeyWord,
            Page,
            Limit,
            Status,

        };

        Store.dispatch({ type: "FETCH_RECEIPTS", payload: data });

        fetch('/api/receipt/search', {
            body: JSON.stringify(data),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            console.log(json);

            if (json.code == 0) {
                Store.dispatch({ type: "FETCH_RECEIPTS_DONE", payload: json })
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    _settle(receiptID, Status) {
        let data = { ID: receiptID, Status };

        fetch('/api/receipt/settle', {
            body: JSON.stringify(data),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            console.log(json);
            if (json.code == 0) {
                // this.setState({ values: json.data });
                this.loadReceiptsFromDB();
                alert(json.message);
            } else { alert(json.message) }
        }).catch(err => {
            console.error(err);
        })
    }

    componentDidMount() {
        this.loadReceiptsFromDB();
    }

    componentWillUnmount() {
        this.unSubscribe();
    }

    render() {
        let {
            receiptList: {
                receipts,
                receipt,
                isFetching,
                Status,
                Page,
                Limit,
                Total
            }
        } = this.state;

        // console.log({ Page, Limit, Total });

        let editorJsx = ("");

        let loading = isFetching ? (<Icon icon='spinner' spin />) : ("");

        if (receipt) {
            editorJsx = (<div className="col-md-5">
                <ReceiptEditor receipt={receipt} onSaveCompleted={this.onSaveCompleted} onCanceled={this.onCanceled} />
            </div>);
        }

        let listJsx = receipts.map((r, index) => (<tr key={index}>
            <td>{r.ID}</td>
            <td>{r.VendorName}</td>
            <td>{r.Goods}</td>
            <td>{r.Amount}</td>
            <td>{r.Flag == 0 ? "进货单" : "退货单"}</td>
            <td>{r.Date}</td>
            <td>{Moment(r.CreateTime).format("YYYY-MM-DD")}</td>
            <td>

                <a href="#" disabled={true} onClick={() => {
                    this.props.history.push({
                        pathname: "/receipt/editor",
                        state: { receipt: r, isReturn: Number.parseInt(r.Flag) == 1 }
                    })
                }}>编辑</a>

                &nbsp;
                  <a href="#" onClick={() => {
                    this.settle(r.ID, r.Status === 0 ? 1 : 0)
                }}>{
                        r.Status === 1 ? "已结算" : "未结算"
                    } </a>
            </td>
        </tr>));
        return (<div id="ReceiptList">
            <div className="col-md-10 col-md-offset-1 main">
                <div id="page_title">
                    <h4>进货单管理</h4>
                    <div className="fun_zone">
                        <Form className="form-inline">
                            <div className="form-group">
                                <Field name="Keyword" id="Keyword" />
                                &nbsp;&nbsp;

                                <button onClick={this.loadReceiptsFromDB} className="btn btn-primary" loading={isFetching ? "loading" : ""}>
                                    查询
                                </button>
                                &nbsp;

                                <button onClick={() => {
                                    this.props.history.push({
                                        pathname: "/receipt/editor",
                                        state: { ID: 0, isReturn: false }
                                    })
                                }} className="btn btn-default">
                                    添加进货单
                                </button>
                                &nbsp;
                                <button onClick={() => {
                                    this.props.history.push({
                                        pathname: "/receipt/editor",
                                        state: { ID: 0, isReturn: true }
                                    })
                                }} className="btn btn-default">
                                    添加退货单
                                </button>
                            </div>
                        </Form>
                    </div>
                    <RadioGroup name="Status" id="Status" value={Status} inline={true} onChange={(value) => {
                        Store.dispatch({ type: "SET_SETTLE_STATUS", payload: value });
                        this.loadReceiptsFromDB(null, value)
                    }}>
                        <Radio value={[0, 1]} inline={true} >所有</Radio>
                        <Radio value={0} inline={true}   >未结算</Radio>
                        <Radio value={1} inline={true}   >已结算</Radio>
                    </RadioGroup>
                </div>

                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>供应商</th>
                            <th>药品</th>
                            <th>金额</th>
                            <th>类型</th>
                            <th>日期</th>
                            <th>创建</th>
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
                                    this.loadReceiptsFromDB("PAGE", null, start, length)
                                } />
                            </td>
                        </tr>
                    </tfoot>
                </table>
                {loading}
            </div>

            {editorJsx}
        </div>)
    }
}

export default ReceiptList;
