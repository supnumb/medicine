import React from 'react';
import Store from './Reducer';

import {Form, Field, createFormControl} from 'form-lib';
import {SchemaModel, StringType} from 'rsuite-schema';

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
        this.onSaveCompleted = this._onSaveCompleted.bind(this);
    }

    _onCancel() {
        Store.dispatch({type: "GOOD_EDITOR_CANCEL"});
    }

    _onSaveCompleted() {
        Store.dispatch({type: "GOOD_EDITOR_DONE"});
    }

    _loadGoodListFromDB() {
        Store.dispatch({type: "FETCH_GOODS"});

        let formData = new FormData();

        formData.append("KeyWord", "");
        formData.append("Page", 0);
        formData.append("Limit", 10);

        fetch('/api/good/search', {
            body: formData,
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin'
        }).then(res => res.json()).then(json => {
            console.log(json);
            if (json.code == 0) {
                Store.dispatch({type: "FETCH_GOODS_DONE", payload: json.data})
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
                <GoodEditor action={action} good={good} onCanceled={this.onCancel} onGoodSaveCompleted={this.onGoodSaveCompleted}/>
            </div>);
        } else if (action == "add") {
            editorJsx = (<div className="col-md-5">
                <GoodEditor action={action} good={null} onCanceled={this.onCancel} onGoodSaveCompleted={this.onGoodSaveCompleted}/>
            </div>);
        }

        let mListJsx = goods.map((g, index) => (<tr>
            <td>{g.Name}</td>
            <td>{g.OfficalName}</td>
            <td>{g.Dimension}</td>
            <td>{g.Unit}</td>
            <td>{g.DefaultCostPrice}</td>
            <td>{g.DefaultPrice}</td>
            <td>{g.LimitPrice}</td>
            <td>{g.Manufacturer}</td>
            <td>{g.UseWay}</td>

            <td style={{
                    "width" : "80px"
                }}>
                <button onClick={() => {
                        Store.dispatch({type: "EDITOR_GOOD", payload: g})
                    }}>编辑</button>
            </td>
        </tr>));

        return (<div id="GoodList">
            <div className="col-md-6 col-md-offset-1 main">
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
                        <button onClick={() => {
                                Store.dispatch({type: "SET_ADD_MODE"})
                            }}>添加</button>
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
                        {mListJsx}
                    </tbody>
                </table>
            </div>

            {editorJsx}
        </div>)
    }
}

export default GoodList;
