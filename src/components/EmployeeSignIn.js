import React from 'react';

import { Form, Field, createFormControl } from 'form-lib';
import { SchemaModel, StringType } from 'rsuite-schema';

const model = SchemaModel({
    UserName: StringType().isRequired('请输入登录用户名'),
    Password: StringType().isRequired('请输入密码'),
});

/**
 * 药师登录页面
 */
class EmployeeSignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            values: { UserName: "13511111111", Password: "super1111" },
            errors: {},
            isFetching: false,
            message: ""
        }

        this.signin = this._signin.bind(this);
    }

    _signin() {

        if (!this.form.check()) {
            this.setState({ message: "数据输入错误，请检查" });
            return
        }

        let { values } = this.state;

        let postData = {
            login_name: values.UserName,
            password: values.Password
        }

        fetch('/api/employee/signin', {
            body: JSON.stringify(postData),
            method: "POST",
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            console.log(json);
            if (json.code == 0) {
                location.href = "/back_index";
                // console.log(location.href);
                // this.props.history.push("/back_index");
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    componentDidMount() {
        console.log(this.props.match);
    }

    render() {

        let { values, errors, isFetching, message } = this.state;

        return (<div id='EmployeeSignIn'>

            <fieldset>
                <legend>药店登录</legend>
                <Form className="form" ref={ref => this.form = ref} values={values} id="form" model={model} onChange={(values) => {
                    this.setState({ values });
                    this.form.cleanErrors();
                }} onCheck={(errors) => {
                    this.setState({ errors });
                }}>
                    <div className="form-group">
                        <label >
                            用户名
                        </label>
                        <Field name="UserName" id="UserName" />
                        <p className="text-danger">{errors.UserName}</p>
                    </div>
                    <div className="form-group">
                        <label >
                            密码
                        </label>
                        <Field name="Password" type="password" id="Paswword" />
                        <p className="text-danger">{errors.Paswword}</p>
                    </div>

                    <div className="form-group">
                        <p className="text-danger">{message}</p>
                        <button className="btn btn-primary" onClick={this.signin}>登录</button>
                    </div>
                </Form>
            </fieldset>
        </div>)
    }
}

export default EmployeeSignIn;