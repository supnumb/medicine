import React from 'react';
import Store from './Reducer'

import InviteList from './InviteList';

import { Form, Field, createFormControl } from 'form-lib';
import { SchemaModel, StringType } from 'rsuite-schema';

const TextareaField = createFormControl('textarea');

const model = SchemaModel({ Name: StringType().isRequired('请输入回访内容') });

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
            updateInvite: null
        };

        this.submitInvite = this._submitInvite.bind(this);
    }

    _submitInvite() {

        if (!this.form.check()) {
            this.setState({ message: "请输入回访内容" });
            return;
        }

        this.setState({ isFetching: true })

        let { member } = this.props;
        let { values } = this.state;

        let postData = {
            MemberID: member.ID,
            Remarks: values.Remarks
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
        if (member) {
            this.setState({ values: member });
        }
    }

    componentUnMount() {
        this.unSubscribe();
    }

    render() {
        let { values, errors, isFetching, updateInvite } = this.state;
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
