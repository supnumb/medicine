import React from 'react';
import Store from './Reducer'

import { Form, Field, createFormControl } from 'form-lib';
import { SchemaModel, StringType } from 'rsuite-schema';

const model = SchemaModel({ Name: StringType().isRequired('角色名不能为空') });

/**
 * 会员基础数据编辑组件
 * @extends React.Component
 */
class MemberEditor extends React.Component {
    constructor(props) {
        super(props);

        // this.unSubscribe = Store.subscribe(() => {
        //     let s = Store.getState();
        //     this.setState(s);
        // });

        // this.state = Store.getState();
        this.state = {
            values: {},
            errors: {}
        };

        this.loadObjectDetail = this._loadObjectDetail.bind(this);
        this.submit = this._submit.bind(this);
        this.cancel = this._cancel.bind(this);
    }

    _loadObjectDetail() { }

    _cancel() {
        if (this.props.onCanceled) {
            this.props.onCanceled();
        }
    }

    _submit() {
        if (!this.form.check()) {
            this.setState({ message: "数据格式有错误" })
            return;
        }

        let formData = new FormData(document.getElementById('form'));
        let { action } = this.props;

        let url = "/api/member/add";
        if (action == "update") {
            url = "/api/member/update";
        }

        fetch(url, {
            body: formData,
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin'
        }).then(res => res.json()).then(json => {
            if (json.code == 0) {
                if (this.props.onMemberDetailSaveCompleted) {
                    this.props.onMemberDetailSaveCompleted(json.data);
                }
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    componentWillReceiveProps(nextProps) {
        let { member, action } = nextProps;
        let { member: oldMember } = this.props;

        console.log({ action, member });

        if (member && oldMember) {
            if (member.ID != oldMember.ID) {
                this.setState({ values: member });
            }
        } else if (member) {
            this.setState({ values: member });
        } else if (action == "add") {
            //添加会员
            this.setState({
                values: {
                    Name: "",
                    PinYin: "",
                    Gender: "",
                    Telephone: "",
                    "City": "",
                    "Address": "",
                    Diseases: "",
                    Remark: "",
                    RelationWithPatient: ""
                }
            })
            this.form.cleanErrors();
        }
    }

    componentDidMount() {
        let { member } = this.props;
        if (member) {
            this.setState({ values: member });
        }
    }

    componentUnMount() {
        this.unSubscribe();
    }

    render() {
        let { values, errors } = this.state;
        let { action } = this.props;

        let header = "添加新会员";
        if (action == "update") {
            header = "修改会员";
        }

        return (<div id="MemberEditor">
            <h4>{header}</h4>
            <Form className="form-horizontal" ref={ref => this.form = ref} values={values} id="form" model={model} onChange={(values) => {
                this.setState({ values });
                this.form.cleanErrors();
            }} onCheck={(errors) => {
                this.setState({ errors })
            }}>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        <span className="red">*</span>名称
                    </label>
                    <div className="col-sm-6">
                        <Field name="Name" id="Name" />
                    </div>
                    <Field type="hidden" name="ID"></Field>
                    <p className="text-danger">{errors.Name}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        <span className="red">*</span>拼音
                    </label>
                    <div className="col-sm-6">
                        <Field name="PinYin" id="PinYin" />
                    </div>
                    <p className="text-danger">{errors.PinYin}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        <span className="red">*</span>性别
                    </label>
                    <div className="col-sm-6">
                        <label className="radio-inline">
                            <input type="radio" name="IsForeign" id="IsForeign" value="1" />
                            男生
                        </label>
                        <label className="radio-inline">
                            <input type="radio" name="IsForeign" id="IsForeign" value="2" />
                            女生
                        </label>
                    </div>
                    <p className="text-danger">{errors.Gender}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        <span className="red">*</span>电话
                    </label>
                    <div className="col-sm-6">
                        <Field name="Telephone" id="Telephone" />
                    </div>
                    <p className="text-danger">{errors.Telephone}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        <span className="red">*</span>城市
                    </label>
                    <div className="col-sm-6">
                        <Field name="City" id="City" />
                    </div>
                    <p className="text-danger">{errors.City}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        <span className="red">*</span>地址
                    </label>
                    <div className="col-sm-6">
                        <Field name="Address" id="Address" />
                    </div>
                    <p className="text-danger">{errors.Address}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        微信号
                    </label>
                    <div className="col-sm-6">
                        <Field name="WeiXinCode" id="WeiXinCode" />
                    </div>
                    <p className="text-danger">{errors.WeiXinCode}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        好友
                    </label>
                    <div className="col-sm-6">
                        <Field name="FriendName" id="FriendName" />
                    </div>
                    <p className="text-danger">{errors.FriendName}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        年代
                    </label>
                    <div className="col-sm-6">
                        <Field name="BirthYear" id="BirthYear" />
                    </div>
                    <p className="text-danger">{errors.BirthYear}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        疾病
                    </label>
                    <div className="col-sm-6">
                        <Field name="Diseases" id="Diseases" />
                    </div>
                    <p className="text-danger">{errors.Diseases}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        患者关系
                    </label>
                    <div className="col-sm-6">
                        <Field name="RelationWithPatient" id="RelationWithPatient" />
                    </div>
                    <p className="text-danger">{errors.RelationWithPatient}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        备注
                    </label>
                    <div className="col-sm-6">
                        <Field name="Remark" id="Remark" />
                    </div>
                    <p className="text-danger">{errors.Remark}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3"></label>
                    <Field name="Name" id="Name" />
                </div>

                <div className="form-group">
                    &nbsp;&nbsp;
                    <button onClick={this.submit} className="btn btn-default">
                        保存
                    </button>
                    &nbsp;&nbsp;
                    <button className="btn" onClick={this.cancel}>取消</button>
                </div>
                <div className="form-group">
                    <Field name="Name" id="Name" />
                    &nbsp;&nbsp;
                    <button onClick={this.submit} className="btn btn-default">
                        查询
                    </button>
                </div>
                <div className="form-group">
                    <Field name="Name" id="Name" />
                    &nbsp;&nbsp;
                    <button onClick={this.submit} className="btn btn-default">
                        查询
                    </button>
                </div>

            </Form>
        </div>)
    }
}

export default MemberEditor;
