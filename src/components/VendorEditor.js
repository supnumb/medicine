import React from 'react';
import { Form, Field, createFormControl } from 'form-lib';
import { SchemaModel, StringType } from 'rsuite-schema';

const TextareaField = createFormControl('textarea');

const model = SchemaModel({
    Name: StringType().isRequired('请输入供应商名称'),
    Contact: StringType().isRequired("请输入联系人"),
    Telephone: StringType().isRequired("请输入联系电话")
});

function param(formdata) { }

class VendorEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            values: {},
            errors: {}
        }

        this.saveVendor = this._saveVendor.bind(this);
    }

    _saveVendor() {
        if (!this.form.check()) {
            this.setState({ message: "请检查输入的数据" })
            return;
        }

        let { values } = this.state;

        fetch(`/api/vendor/save`, {
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
                this.props.onSaveCompleted();
            }
        }).catch(err => {
            console.error(err);
        })

    }

    componentWillReceiveProps(nextProps) {
        let { vendor } = nextProps;

        let { vendor: {
            oldVendor
        } } = this.props;

        if (oldVendor) {
            if (vendor && vendor.ID != oldVendor.ID) {
                this.setState({ values: vendor });
            }
        } else {
            if (vendor.ID == -1) {
                this.setState({
                    values: {
                        ID: 0,
                        Name: "",
                        Contact: "",
                        Telephone: "",
                        Address: "",
                        Remark: ""
                    }
                });
            } else {
                this.setState({ values: vendor });
            }
        }
    }

    componentDidMount() {
        let { vendor } = this.props;

        if (vendor) {
            this.setState({ values: vendor });
        }
    }

    render() {
        let { vendor } = this.props;
        let { values, errors, message } = this.state;

        return (<div id="VendorEditor" className="editor_zone">
            <h4>供应商管理</h4>
            <Form className="form-horizontal" ref={ref => this.form = ref} values={values} id="form2" model={model} onChange={(values) => {
                this.setState({ values });
                this.form.cleanErrors();
            }} onCheck={(errors) => {
                this.setState({ errors })
            }}>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        供应商&nbsp;<span className="red">*</span>
                    </label>
                    <div className="col-sm-6">
                        <Field name="Name" id="Name" />
                    </div>
                    <Field type="hidden" name="ID"></Field>
                    <p className="text-danger">{errors.Name}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        联系人&nbsp;<span className="red">*</span>
                    </label>
                    <div className="col-sm-6">
                        <Field name="Contact" id="Contact" />
                    </div>
                    <p className="text-danger">{errors.Contact}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        联系电话&nbsp;<span className="red">*</span>
                    </label>
                    <div className="col-sm-6">
                        <Field name="Telephone" id="Telephone" />
                    </div>
                    <p className="text-danger">{errors.Telephone}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        地址
                    </label>
                    <div className="col-sm-6">
                        <Field name="Address" id="Address" />
                    </div>
                    <p className="text-danger">{errors.Address}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        备注
                    </label>
                    <div className="col-sm-6">
                        <Field name="Remark" id="Remark" accepter={TextareaField} />
                    </div>
                    <p className="text-danger">{errors.Remark}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3"></label>
                    <p className="text-danger">{message}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3"></label>
                    <button onClick={this.saveVendor} className="btn btn-primary">
                        保存
                    </button>
                    &nbsp;&nbsp;
                    <button className="btn btn-default" onClick={() => {
                        this.props.onCancel()
                    }}>取消</button>
                </div>

            </Form>
        </div>)
    }
}

export default VendorEditor;
