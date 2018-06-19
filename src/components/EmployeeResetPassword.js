import React from 'react';
import { Form, Field, createFormControl } from 'form-lib';
import { SchemaModel, StringType } from 'rsuite-schema';


const model = SchemaModel({
    OldPassword: StringType().isRequired('请输入原始密码'),
    Password: StringType().isRequired('请输入新密码'),
    ConfirmPassword: StringType().isRequired('请重复输入密码')
});


class EmployeeResetPassword extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            values: {},
            errors: {},
            isFetching: false
        };

        this.submitResetPassword = this._submitResetPassword.bind(this);
    }

    _submitResetPassword() {

    }

    componentWillReceiveProps(nextProps) {
        let { employee } = nextProps;
        let { employee: oldemployee } = this.props;

        if (employee && oldemployee) {
            if (employee.ID != oldemployee.ID) {
                this.setState({ values: employee });
            }
        } else if (employee) {
            this.setState({ values: employee });
        } else {
            this.setState({
                values: {
                    OldPassword: "111111",
                    Password: "",
                    ConfirmPassword: ""
                }
            });

            this.form.cleanErrors();
        }
    }

    componentDidMount() {
        let { employee } = this.props;

        if (employee)
            this.setState({ values: employee });
    }

    render() {
        let { values, errors } = this.state;

        return (<div id='EmployeeEditor' className="editor_zone">
            <h4>重置密码</h4>
            <Form className="form-horizontal" ref={ref => this.form = ref} values={values} id="form" model={model} onChange={(values) => {
                Store.dispatch({ type: "SET_VALUES", payload: values });
                this.form.cleanErrors();
            }} onCheck={(errors) => {
                Store.dispatch({ type: "SET_ERRORS", payload: errors });
            }}>
                <div className="form-group">
                    <label className="control-label col-sm-3">
                        <span className="red">*</span>&nbsp;原密码
                    </label>
                    <div className="col-sm-6">
                        <Field name="DefaultPassword" id="DefaultPassword" />
                    </div>
                    <p className="text-danger">{errors.DefaultPassword}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        <span className="red">*</span>&nbsp;新密码
                    </label>
                    <div className="col-sm-6">
                        <Field name="DefaultPassword" id="DefaultPassword" />
                    </div>
                    <p className="text-danger">{errors.DefaultPassword}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        <span className="red">*</span>&nbsp;重新输入
                    </label>
                    <div className="col-sm-6">
                        <Field name="ConfirmPassword" id="ConfirmPassword" />
                    </div>
                    <p className="text-danger">{errors.ConfirmPassword}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">

                    </label>
                    <button onClick={this.submitResetPassword} className="btn btn-primary"> 保存 </button>
                </div>

            </Form>
        </div>);
    }
}

export default EmployeeResetPassword;


