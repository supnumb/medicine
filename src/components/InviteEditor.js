import React from 'react';
import Store from './Reducer'

import InviteList from './InviteList';

import {Form, Field, createFormControl} from 'form-lib';
import {SchemaModel, StringType} from 'rsuite-schema';

const model = SchemaModel({Name: StringType().isRequired('角色名不能为空')});

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
            isFetching: false
        };

        this.submitInvite = this._submitInvite.bind(this);
    }

    _submitInvite() {
        let {member} = this.props;
        let formData = new FormData();

        let {values: {
                Remarks
            }} = this.state;

        formData.append("MemberID", member.ID);
        formData.append("Remarks", Remarks);

        fetch('/api/visit/save', {
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
            //TODO
        }).catch(err => {
            console.error(err);
        });
    }

    componentDidMount() {
        let {member} = this.props;
        if (member) {
            this.setState({values: member});
        }
    }

    componentUnMount() {
        this.unSubscribe();
    }

    render() {
        let {values, errors, isFetching} = this.state;
        let {member} = this.props;
        console.log({member});
        return (<div id="InviteEditor">
            <h4>客户回访记录</h4>
            <InviteList member={member}/>
            <Form ref={ref => this.form = ref} values={values} id="form" model={model} onChange={(values) => {
                    this.setState({values});
                    this.form.cleanErrors();
                }} onCheck={(errors) => {
                    this.setState({errors})
                }}>

                <div className="form-group">
                    <label >
                        回访
                    </label>
                    <Field name="Remarks" id="Remarks"/>
                    <p className="text-danger">{errors.Remarks}</p>
                </div>
                <div className="form-group">
                    <button onClick={this.submitInvite} className="btn btn-primary">
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
