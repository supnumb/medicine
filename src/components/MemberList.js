import React from 'react';
import Store from './Reducer';

import {Form, Field, createFormControl} from 'form-lib';
import {SchemaModel, StringType} from 'rsuite-schema';

import MemberEditor from './MemberEditor';
import InviteEditor from './InviteEditor';
import IntentionEditor from './IntentionEditor';

class MemberList extends React.Component {
    constructor(props) {
        super(props);

        this.unSubscribe = Store.subscribe(() => {
            let s = Store.getState();
            this.setState(s);
        });

        this.state = Store.getState();
        this.loadMemberList = this._loadMemberList.bind(this);
        this.onMemberDetailSaveCompleted = this._onMemberDetailSaveCompleted.bind(this);
        this.onMemberDetailCancel = this._onMemberDetailCancel.bind(this);
    }

    _loadMemberList() {
        Store.dispatch({type: "FETCH_MEMBER"});

        let formData = new FormData();

        formData.append("KeyWord", "测试");
        formData.append("MobilPhone", "");
        formData.append("Page", 0);
        formData.append("Limit", 20);

        fetch('/api/member/search', {
            body: formData,
            method: "POST",
            mode: 'same-origin',
            credentials: 'same-origin'
        }).then(res => res.json()).then(json => {
            if (json.code == 0) {
                console.log(json);
                Store.dispatch({type: "FETCH_MEMBER_DONE", payload: json.data})
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    componentUnMount() {
        this.unSubscribe();
    }

    _onMemberDetailSaveCompleted(newMember) {
        Store.dispatch({type: "MEMBER_EDITOR_DONE"});
    }

    _onMemberDetailCancel() {
        Store.dispatch({type: "MEMBER_EDITOR_CANCEL"});
    }

    componentDidMount() {
        this.loadMemberList();
    }

    render() {
        let {
            memberList: {
                members,
                member,
                action
            }
        } = this.state;

        let editorJsx = ("");

        // console.log({action, member});

        switch (action) {
            case "update_member":
                editorJsx = (<div className="col-md-5">
                    <MemberEditor action={action} member={member} onCanceled={this.onMemberDetailCancel} onSaveCompleted={this.onMemberDetailSaveCompleted}/>
                </div>);
                break;
            case "add_member":
                editorJsx = (<div className="col-md-5">
                    <MemberEditor action={action} member={null} onCanceled={this.onMemberDetailCancel} onSaveCompleted={this.onMemberDetailSaveCompleted}/>
                </div>);
                break;
            case "add_visit":
                editorJsx = (<div className="col-md-5">
                    <InviteEditor action={action} member={member} onCanceled={this.onMemberDetailCancel} onSaveCompleted={this.onMemberDetailSaveCompleted}/>
                </div>);
                break;
            case "add_intention":
                editorJsx = (<div className="col-md-5">
                    <IntentionEditor action={action} member={member} onCanceled={this.onMemberDetailCancel} onSaveCompleted={this.onMemberDetailSaveCompleted}/>
                </div>);
                break;
        }

        let mListJsx = members.map((m, index) => (<tr key={index}>
            <td style={{
                    "width" : "60px"
                }}>{m.Name}</td>
            <td>{m.City}</td>
            <td>{m.MobilPhone}</td>
            <td>{m.IntentionGoods}</td>
            <td>{m.IntentionQuantity}</td>
            <td>{m.VisitQuantity}</td>
            <td>{m.OrderQuantity}</td>
            <td style={{
                    "width" : "120px"
                }}>
                <a href="#" onClick={() => {
                        Store.dispatch({type: "EDITOR_MEMBER", payload: m})
                    }}>编辑</a>&nbsp;
                <a href="#" onClick={() => {
                        Store.dispatch({type: "EDITOR_MEMBER_INTENTIONS", payload: m})
                    }}>意向</a>
                &nbsp;
                <a href="#" onClick={() => {
                        Store.dispatch({type: "EDITOR_MEMBER_VISIT", payload: m})
                    }}>回访</a>

            </td>
        </tr>));

        return (<div id="MemberList">
            <div className="col-md-6 col-md-offset-1 main">
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
                                <button onClick={this.submit} className="btn btn-primary">
                                    查询
                                </button>
                            </div>

                            &nbsp;&nbsp;
                            <button className="btn btn-default" onClick={() => {
                                    Store.dispatch({type: "SET_ADD_MODE"})
                                }}>添加新会员</button>
                        </Form>

                    </div>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>客人姓名</th>
                            <th>城市</th>
                            <th>电话</th>
                            <th>意向标签</th>
                            <th>意向商品</th>
                            <th>回访</th>
                            <th>成单</th>
                            <th>操作</th>
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

export default MemberList;
