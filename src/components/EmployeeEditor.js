import React from 'react';

import { Form, Field, createFormControl } from 'form-lib';
import { SchemaModel, StringType } from 'rsuite-schema';
import { Icon, RadioGroup, Radio } from 'rsuite';

const model = SchemaModel({
    Name: StringType().isRequired('请输入账户名'),
    MobilPhone: StringType().isRequired('请输入账户电话').pattern(/^1[3456789]\d{9}$/, "格式不正确"),
    DefaultPassword: StringType().isRequired('请填写初始密码')
});

/**
 * 编辑药师详情信息
 */
class EmployeeEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            values: { Flag: 1, DefaultPassword: "111111" },
            errors: {},
            isFetching: false,
            message: ""
        }

        this.submitEmployee = this._submitEmployee.bind(this);
        this.loadEmployeeDetail = this._loadEmployeeDetail.bind(this);
    }

    _loadEmployeeDetail(employee) {

    }

    _submitEmployee() {
        let { values } = this.state;
        console.log(values);

        if (!this.form.check()) {
            this.setState({ message: "请检查输入数据" });
            return;
        }

        fetch('/api/employee/save', {
            body: JSON.stringify(values),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            console.log({ json });
            if (json.code == 0) {

                if (this.props.onSumbitCompleted) {
                    this.props.onSumbitCompleted("SUCCESS", json)
                }
                alert(json.message);
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })


        console.log("/employee/save");

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
                    Name: "",
                    DefaultPassword: "111111",
                    MobilPhone: "",
                    Flag: 1
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

        console.log(values);

        return (<div id='EmployeeEditor' className="editor_zone">
            <h4>添加账户</h4>

            <Form className="form-horizontal" ref={ref => this.form = ref} values={values} id="form" model={model} onChange={(values) => {
                this.setState({ values })
                this.form.cleanErrors();
            }} onCheck={(errors) => {
                this.setState({ errors });
            }}>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        <span className="red">*</span>&nbsp;账户名
                    </label>
                    <div className="col-sm-6">
                        <Field name="Name" id="Name" />
                    </div>
                    <p className="text-danger">{errors.Name}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        <span className="red">*</span>&nbsp;电话
                    </label>
                    <div className="col-sm-6">
                        <Field name="MobilPhone" id="MobilPhone" />
                    </div>
                    <p className="text-danger">{errors.MobilPhone}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        <span className="red">*</span>&nbsp;初始密码
                    </label>
                    <div className="col-sm-6">
                        <Field name="DefaultPassword" id="DefaultPassword" />
                    </div>
                    <p className="text-danger">{errors.DefaultPassword}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        <span className="red">*</span>&nbsp;角色
                    </label>
                    <div className="col-sm-6">
                        <RadioGroup name="Flag" value={values.Flag} id="Flag" inline={true} onChange={
                            (value, event) => {
                                values.Flag = value;
                                Store.dispatch({ type: "SET_VALUES", payload: values });
                            }
                        }>
                            <Radio value={2}>管理员</Radio>
                            <Radio value={1}>药师</Radio>
                        </RadioGroup>
                    </div>
                    <p className="text-danger">{errors.DefaultPassword}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">

                    </label>
                    <button onClick={this.submitEmployee} className="btn btn-primary"> 保存 </button>
                </div>
            </Form>
        </div>)
    }
}

export default EmployeeEditor;