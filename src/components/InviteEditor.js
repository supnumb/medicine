import React from 'react';
import Store from './Reducer'
import { Form, Field, createFormControl } from 'form-lib';
import { SchemaModel, StringType } from 'rsuite-schema';

import InviteList from './InviteList';
import { RadioGroup, Radio, SelectPicker } from 'rsuite';
const TextareaField = createFormControl('textarea');
const model = SchemaModel({ Remarks: StringType().isRequired('请输入回访内容') });

/**
 * 客户回访编辑组件
 * @extends React.Component
 */
class InviteEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            values: {},
            errors: {},
            isFetching: false,
            updateInvite: null, employees: []
        };

        this.submitInvite = this._submitInvite.bind(this);
        this.loadEmployeesFromDB = this._loadEmployeesFromDB.bind(this);
    }

    _loadEmployeesFromDB() {
        fetch('/api/employee/search', {
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            console.log({ json });
            if (json.code == 0) {

                let employees = json.data.map((e) => ({ "value": e.ID, "label": e.Name, "data": e }));
                this.setState({ employees });
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    _submitInvite() {

        if (!this.form.check()) {
            this.setState({ message: "请输入回访内容" });
            return;
        }

        this.setState({ isFetching: true })

        let { member } = this.props;
        let { values, EmployeeID } = this.state;

        let postData = {
            MemberID: member.ID,
            Remarks: values.Remarks,
            Style: values.Style,
            EmployeeID
        }

        fetch('/api/visit/save', {
            body: JSON.stringify(postData),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            if (json.code == 0) {
                this.setState({ updateInvite: json.data, values: { Remarks: "" }, isFetching: false });
            } else {
                alert(json.message);
            }
            //TODO
        }).catch(err => {
            console.error(err);
        });
    }

    componentDidMount() {
        let { member } = this.props;
        //电话
        member.Style = 0;
        if (member) {
            this.setState({ values: member });
        }

        this.loadEmployeesFromDB();
    }

    componentUnMount() {
        this.unSubscribe();
    }

    render() {
        let { values, isFetching, updateInvite, employees } = this.state;
        let { member } = this.props;

        return (<div id="InviteEditor">
            <h4>{member.Name}--回访记录</h4>
            <InviteList member={member} updateInvite={updateInvite} />
            <Form ref={ref => this.form = ref} values={values} id="form" model={model} onChange={(values) => {
                this.setState({ values });
                this.form.cleanErrors();
            }} onCheck={(errors) => {
                this.setState({ errors })
            }}>

                <div className="form-group">
                    <label >
                        回访
                    </label>
                    <Field name="Remarks" id="Remarks" accepter={TextareaField} />
                </div>

                <div className="form-group">
                    <label >
                        方式
                    </label>
                    <RadioGroup name="Style" id="Style" value={values.Style} inline={true} onChange={
                        (value) => {
                            let { values } = this.state;
                            values.Style = value;
                            this.setState({ values })
                        }
                    }>
                        <Radio value={0}>电话</Radio>
                        <Radio value={1}>微信</Radio>
                        <Radio value={2}>短信</Radio>
                        <Radio value={3}>其他</Radio>
                    </RadioGroup>
                </div>

                <div className="form-group">
                    <label >
                        药师
                    </label>
                    <SelectPicker id="EmployeeName" name="EmployeeName" onSelect={(value) => {
                        values.EmployeeID = value;
                        this.setState({ values });

                    }} placeholder="请选择回访者" data={employees} searchable={false} />
                </div>

                <div className="form-group">
                    <button onClick={this.submitInvite} className="btn btn-primary" disabled={isFetching}>
                        保存
                    </button>
                    &nbsp;&nbsp;
                    <button className="btn btn-default" onClick={this.cancel}>取消</button>
                </div>
            </Form>
        </div>);
    }
}

export default InviteEditor;
