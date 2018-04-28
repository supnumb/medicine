import React from 'react';
import Store from './Reducer';

import {Form, Field, createFormControl} from 'form-lib';
import {SchemaModel, StringType} from 'rsuite-schema';

import MemberEditor from './MemberEditor';

class MemberList extends React.Component {
    constructor(props) {
        super(props);

        this.unSubscribe = Store.subscribe(() => {
            let s = Store.getState();
            this.setState(s);
        });

        this.state = Store.getState();
        this.loadMemberList = this._loadMemberList.bind(this);
    }

    _loadMemberList() {
        Store.dispatch({type: "FETCH_MEMBER"});

        let formData = new FormData();
        formData.append("keyword", "测试会员");

        fetch('/api/member/search', {
            body: formData,
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin'
        }).then(res => res.json()).then(json => {
            console.log(json);
            if (json.code == 0) {
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

    componentDidMount() {
        this.loadMemberList();
    }

    render() {
        let {
            memberList: {
                members,
                member
            }
        } = this.state;

        let editorJsx = ("");
        if (member) {
            editorJsx = (<div className="col-md-2 col-md-offset-1">
                <MemberEditor member={member}/>
            </div>)
        }

        let mListJsx = members.map((m, index) => (<tr>
            <td>{m.Name}</td>
            <td>{m.City}</td>
            <td>{m.Gender}</td>
            <td>{m.MobilPhone}</td>
            <td>{m.WeiXinCode}</td>
            <td>{m.FriendName}</td>
            <td>{m.Diseases}</td>
            <td>{m.BirthYear}</td>
            <td>{m.IntentionCount}</td>
            <td>{m.VisitQuantity}</td>
            <td>{m.OrderQuantity}</td>
            <td>
                <button onClick={() => {
                        Store.dispatch({type: "EDITOR_MEMBER", payload: m})
                    }}>编辑</button>
            </td>
        </tr>));

        return (<div id="MemberList">
            <div className="col-md-8 col-md-offset-1 main">
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
                            <th>疾病</th>
                            <th>年代</th>
                            <th>意向单</th>
                            <th>回访次</th>
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
