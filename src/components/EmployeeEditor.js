import React from 'react';
import Store from './Reducer';

import { Form, Field, createFormControl } from 'form-lib';
import { SchemaModel, StringType } from 'rsuite-schema';

const model = SchemaModel({
    // MemberName: StringType().isRequired('请输入查询客户名称'),
    MobilPhone: StringType().isRequired('请填写客户联系电话'),
    Address: StringType().isRequired('请填写配送地址')
});


class EmployeeEdit extends React.Component {
    constructor(props) {
        super(props);


        this.submitEmployee = this._submitEmployee.bind(this);
    }

    _submitEmployee() {
        if (!this.form.check()) {
            Store.dispatch({ type: "SET_FORM_CHECK_RESULT", payload: "数据格式有错误!" });
            return;
        }


    }

    componentDidMount() {


    }

    render() {
        return (<div id='EmployeeEdit'>

            <Form className="form-horizontal" ref={ref => this.form = ref} values={values} id="form" model={model} onChange={(values) => {
                Store.dispatch({ type: "SET_VALUES", payload: values });
                this.form.cleanErrors();
            }} onCheck={(errors) => {
                Store.dispatch({ type: "SET_ERRORS", payload: errors });
            }}>


            </Form>


        </div>)
    }
}

export default EmployeeEdit;