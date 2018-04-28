import React from 'react';
import Store from './Reducer'

import {Form, Field, createFormControl} from 'form-lib';
import {SchemaModel, StringType} from 'rsuite-schema';

/**
 * 药品基础数据编辑组件
 * @extends React.Component
 */
class MemberEditor extends React.Component {
    constructor(props) {
        super(props);

        this.unSubscribe = Store.subscribe(() => {
            let s = Store.getState();
            this.setState(s);
        });

        this.state = Store.getState();
        this.loadObjectDetail = this._loadObjectDetail.bind(this);
        this.submit = this._submit.bind(this);
    }

    _loadObjectDetail() {}

    _submit() {
        if (!this.form.check()) {
            this.setState({message: "数据格式有错误"})
            return;
        }

        let formData = new FormData(document.getElementById('form'));

        fetch('/api/member/add', {
            body: formData,
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin'
        }).then(res => res.json()).then(json => {
            //TODO
        }).catch(err => {
            console.error(err);
        })
    }

    componentDidMount() {
        let {location} = this.props
    }

    componentUnMount() {
        this.unSubscribe();
    }

    render() {
        let {member} = this.props;

        return (<div id="MemberEditor">
            <Form className="form" ref={ref => this.form = ref} id="form" onChange={(values) => {
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

            会员编辑页面: {member.Name}
            {member.Gender}
            {member.City}
            {member.Telephone}
        </div>)
    }
}

export default MemberEditor;
