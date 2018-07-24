import React from 'react';
import Store from './Reducer';

import { Form, Field, createFormControl } from 'form-lib';
import { SchemaModel, StringType } from 'rsuite-schema';

import MemberEditor from './MemberEditor';
import InviteEditor from './InviteEditor';
import IntentionEditor from './IntentionEditor';
import { Icon } from 'rsuite';
import { default as Pager } from './Pager'

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
        this.exportMemberList = this._exportMemberList.bind(this);
    }

    _exportMemberList() {
        let {
            memberList: {
                KeyWord,
            },
        } = this.state;

        let { Employee } = this.props;

        if (Employee.Flag !== 2) {
            alert("请以管理员角色登录！");
            return;
        }

        let data = {
            KeyWord,
            Page: 0,
            Limit: 100 * 10000,
            Action: "export"
        };

        fetch('/api/member/search', {
            body: JSON.stringify(data),
            method: "POST",
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.blob()).then(blob => {

            var a = document.createElement('a');
            var url = window.URL.createObjectURL(blob);
            var filename = '会员导出文件.csv';
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);

        }).catch(err => {
            console.error(err);
        })
    }

    _loadMemberList(event, page = 0, limit = 10) {

        let {
            memberList: {
                KeyWord,
                Page,
                Limit,
            }
        } = this.state;

        if (event) {
            KeyWord = $("#KeyWord").val();
            Page = page;
            Limit = limit
        }

        let data = {
            KeyWord,
            Page,
            Limit
        };

        Store.dispatch({ type: "FETCH_MEMBER", payload: data });

        fetch('/api/member/search', {
            body: JSON.stringify(data),
            method: "POST",
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            if (json.code == 0) {
                console.log(json);
                Store.dispatch({ type: "FETCH_MEMBER_DONE", payload: json })
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    componentWillUnmount() {
        this.unSubscribe();
    }

    _onMemberDetailSaveCompleted(data) {
        Store.dispatch({ type: "MEMBER_EDITOR_DONE" });

        if (data.code == 0) {
            this.loadMemberList();
            alert("保存成功");
        }
    }

    _onMemberDetailCancel() {
        Store.dispatch({ type: "MEMBER_EDITOR_CANCEL" });
    }

    _onIntentionOrInviteSaveCompleted(data) {
        if (data.code == 0) {

        }
    }

    componentDidMount() {
        this.loadMemberList();
    }

    render() {
        let {
            memberList: {
                members,
                member,
                action,
                isFetching,
                Page,
                Limit,
                Total
            }
        } = this.state;

        let editorJsx = ("");

        let loading = isFetching ? (<Icon icon='spinner' spin />) : ("");

        switch (action) {
            case "update_member":
                editorJsx = (<div className="col-md-5">
                    <MemberEditor action={action} member={member} onCanceled={this.onMemberDetailCancel} onSaveCompleted={this.onMemberDetailSaveCompleted} />
                </div>);
                break;
            case "add_member":
                editorJsx = (<div className="col-md-5">
                    <MemberEditor action={action} member={null} onCanceled={this.onMemberDetailCancel} onSaveCompleted={this.onMemberDetailSaveCompleted} />
                </div>);
                break;
            case "add_visit":
                editorJsx = (<div className="col-md-5">
                    <InviteEditor action={action} member={member} onCanceled={this.onMemberDetailCancel} onSaveCompleted={this.onMemberDetailSaveCompleted} />
                </div>);
                break;
            case "add_intention":
                editorJsx = (<div className="col-md-5">
                    <IntentionEditor action={action} member={member} onCanceled={this.onMemberDetailCancel} onSaveCompleted={this.onMemberDetailSaveCompleted} />
                </div>);
                break;
        }

        let mListJsx = ("")

        if (members) {
            mListJsx = members.map((m, index) => (<tr key={index}>
                <td>{m.ID}</td>
                <td style={{
                    "width": "60px"
                }}>{m.Name}</td>
                <td>{m.MobilPhone}</td>
                <td>{m.Tags}</td>
                <td>{m.Goods}</td>
                <td>{m.VisitQuantity}</td>
                <td>
                    <button className="btn-link" onClick={
                        () =>
                            this.props.history.push({ pathname: "/member/orders", state: m })
                    }>
                        {m.OrderQuantity}
                    </button>
                </td>
                <td style={{
                    "width": "108px"
                }}>
                    <a href="#" onClick={() => {
                        Store.dispatch({ type: "EDITOR_MEMBER", payload: m })
                    }}>编辑</a>&nbsp;
                <a href="#" onClick={() => {
                        Store.dispatch({ type: "EDITOR_MEMBER_INTENTIONS", payload: m })
                    }}>意向</a>
                    &nbsp;
                <a href="#" onClick={() => {
                        Store.dispatch({ type: "EDITOR_MEMBER_VISIT", payload: m })
                    }}>回访</a>
                </td>
            </tr>));
        }

        return (<div id="MemberList">
            <div className="col-md-6 col-md-offset-1 main">
                <div id="page_title">
                    <h4>会员管理</h4>
                    <div className="fun_zone">
                        <Form className="form-inline" ref={ref => this.form = ref} id="form" onChange={(values) => {
                            this.setState({ role: values });
                            this.form.cleanErrors();
                        }} onCheck={(errors) => {
                            this.setState({ errors })
                        }}>
                            <div className="form-group">
                                <Field name="KeyWord" id="KeyWord" />
                                &nbsp;&nbsp;
                                <button onClick={this.loadMemberList} className="btn btn-primary">
                                    查询
                                </button>
                            </div>
                            &nbsp;&nbsp;
                            <button className="btn btn-default" onClick={() => {
                                Store.dispatch({ type: "SET_ADD_MODE" })
                            }}>添加新会员</button>
                            &nbsp;
                            <button className="btn btn-default" onClick={this.exportMemberList}>导出</button>
                        </Form>
                    </div>
                </div>

                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>客人姓名</th>
                            <th>电话</th>
                            <th>意向</th>
                            <th>意向商品</th>
                            <th>回访</th>
                            <th>成单</th>
                            <th>操作</th>
                        </tr>
                    </thead>

                    <tbody>
                        {mListJsx}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={8}>
                                <Pager start={Page} length={Limit} total={Total} onPageChanged={({ start, length }) =>
                                    this.loadMemberList("PAGE", start, length)
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

export default MemberList;
