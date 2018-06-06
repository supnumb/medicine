import React from 'react';
import Store from './Reducer';

import { Form, Field, createFormControl } from 'form-lib';
import { SchemaModel, StringType } from 'rsuite-schema';

import GoodEditor from './GoodEditor';

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
        this.loadGoodListFromDB = this._loadGoodListFromDB.bind(this);
        this.onCancel = this._onCancel.bind(this);
        this.onGoodSaveCompleted = this._onSaveCompleted.bind(this);
    }

    _onCancel() {
        Store.dispatch({ type: "GOOD_EDITOR_CANCEL" });
    }

    _onSaveCompleted(data) {
        if (data.code == 0) {
            this.loadGoodListFromDB();
            Store.dispatch({ type: "GOOD_EDITOR_DONE" });
        }
    }

    _loadGoodListFromDB(event) {
        let {
            goodList: {
                KeyWord,
                Page,
                Limit
            }
        } = this.state;

        console.log(event);

        if (event) {
            KeyWord = $("#Keyword").val();
            Page = 0;
            Limit = 10;
        }

        let params = { KeyWord, Page, Limit };

        console.log(params);

        Store.dispatch({ type: "FETCH_GOODS", payload: params });

        fetch('/api/good/search', {
            body: JSON.stringify(params),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            console.log(json);
            if (json.code == 0) {
                Store.dispatch({ type: "FETCH_GOODS_DONE", payload: json.data })
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    componentDidMount() {
        this.loadGoodListFromDB();
    }

    componentUnMount() {
        this.unSubscribe();
    }

    render() {
        let {
            goodList: {
                goods,
                good,
                action
            }
        } = this.state;

        let editorJsx = ("");
        if (good && action == "update") {
            editorJsx = (<div className="col-md-5">
                <GoodEditor action={action} good={good} onCanceled={this.onCancel} onGoodSaveCompleted={this.onGoodSaveCompleted} />
            </div>);
        } else if (action == "add") {
            editorJsx = (<div className="col-md-5">
                <GoodEditor action={action} good={null} onCanceled={this.onCancel} onGoodSaveCompleted={this.onGoodSaveCompleted} />
            </div>);
        }

        let mListJsx = goods.map((g, index) => (<tr key={index}>
            <td>{g.ID}</td>
            <td>{g.Name}</td>
            <td>{g.OfficalName}</td>
            <td>{g.Dimension}</td>
            <td>{g.Unit}</td>
            <td>{g.DefaultCostPrice}</td>
            <td>{g.Translation}</td>
            <td>{g.PeriodTreatment}</td>
            <td>{g.Manufacturer}</td>
            <td>{g.UseWay}</td>

            <td style={{
                "width": "80px"
            }}>
                <a href="#" onClick={() => {
                    Store.dispatch({ type: "EDITOR_GOOD", payload: g })
                }}>编辑</a>
            </td>
        </tr>));

        return (<div id="GoodList">
            <div className="col-md-6 col-md-offset-1 main">
                <div id="page_title">
                    <h4>药品管理</h4>
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
                                <button onClick={this.loadGoodListFromDB} className="btn btn-primary">
                                    查询
                                </button>
                            </div>
                            &nbsp;&nbsp;
                            <button className="btn btn-default" onClick={() => {
                                Store.dispatch({ type: "SET_ADD_MODE" })
                            }}>添加</button>
                        </Form>

                    </div>

                </div>

                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>药品名</th>
                            <th>通用名</th>
                            <th>规格</th>
                            <th>单位</th>
                            <th>默认成本</th>
                            <th>适应症</th>
                            <th>疗程</th>
                            <th>生产商</th>
                            <th>用法</th>
                            <th>进口</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mListJsx}
                    </tbody>
                </table>
            </div>

            {editorJsx}
        </div>)
    }
}

export default GoodList;
