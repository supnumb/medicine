import React from 'react';
import Store from './Reducer'

import IntentionList from './IntentionList';

import {Form, Field, createFormControl} from 'form-lib';
import {SchemaModel, StringType} from 'rsuite-schema';

const model = SchemaModel({Name: StringType().isRequired('角色名不能为空')});

/**
 * 会员意向编辑组件
 * @extends React.Component
 */
class IntentionEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            values: {},
            errors: {},
            isFetching: false
        };

        this.loadObjectDetail = this._loadObjectDetail.bind(this);
        this.submitIntention = this._submitIntention.bind(this);
    }

    _loadObjectDetail() {}

    _submitIntention() {

        let {member} = this.props;
        let formData = new FormData();

        let {values: {
                Remarks
            }} = this.state;

        formData.append("MemberID", member.ID);
        formData.append("Goods", Remarks)

        fetch('/api/intention/save', {
            body: formData,
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin'
        }).then(res => res.json()).then(json => {
            if (json.code == 0) {
                console.log(json);
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    componentDidMount() {
        let {member} = this.props;
        if (member) {
            this.setState({values: member});
        }
    }

    componentUnMount() {}

    render() {
        let {member} = this.props;
        let {values, errors, isFetching} = this.state;

        return (<div id="IntentionEditor">
            <IntentionList member={member}/>

            <Form ref={ref => this.form = ref} values={values} id="form" model={model} onChange={(values) => {
                    this.setState({values});
                    this.form.cleanErrors();
                }} onCheck={(errors) => {
                    this.setState({errors})
                }}>

                <div className="form-group">
                    <label>
                        意向药品
                    </label>
                    <Field name="Remark" id="Remark"/>
                    <p className="text-danger">{errors.Remark}</p>
                </div>

                <div className="form-group">
                    <button onClick={this.submitIntention} className="btn btn-primary">
                        保存
                    </button>
                    &nbsp;&nbsp;
                    <button className="btn btn-default" onClick={this.cancel}>取消</button>
                </div>
            </Form>
        </div>)
    }
}

export default IntentionEditor;
