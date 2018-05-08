import React from 'react';

class VendorEditor extends React.Component {
    constructor(props) {
        super(props);

        this.saveVendor = this._saveVendor.bind(this);
    }

    _saveVendor() {
        if (!this.form.check()) {
            this.setState({message: "数据格式有错误"})
            return;
        }

        let formData = new FormData(document.getElementById('form'));

        fetch('/api/vendor/save', {
            body: formData,
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin'
        }).then(res => res.json()).then(json => {
            if (json.code == 0) {
                this.props.onGoodSaveCompleted();
            }
            //TODO
        }).catch(err => {
            console.error(err);
        })

    }

    componentDidMount() {}

    render() {
        let {vendor} = this.props;
        let {values, errors} = this.state;

        return (<div id="VendorEditor">
            <Form className="form-horizontal" ref={ref => this.form = ref} values={values} id="form" model={model} onChange={(values) => {
                    this.setState({values});
                    this.form.cleanErrors();
                }} onCheck={(errors) => {
                    this.setState({errors})
                }}>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        <span className="red">*</span>名称
                    </label>
                    <div className="col-sm-6">
                        <Field name="Name" id="Name"/>
                    </div>
                    <Field type="hidden" className="" name="ID"></Field>
                    <p className="text-danger">{errors.Name}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        联系人
                    </label>
                    <div className="col-sm-6">
                        <Field name="Medicare" id="Medicare"/>
                    </div>
                    <p className="text-danger">{errors.Medicare}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        联系电话
                    </label>
                    <div className="col-sm-6">
                        <Field name="PeriodTreatment" id="PeriodTreatment"/>
                    </div>
                    <p className="text-danger">{errors.PeriodTreatment}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        地址
                    </label>
                    <div className="col-sm-6">
                        <Field name="Translation" id="Translation"/>
                    </div>
                    <p className="text-danger">{errors.Translation}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3"></label>
                    <div className="col-sm-6">
                        <label class="radio-inline">
                            <input type="radio" name="IsForeign" id="IsForeign" value="0"/>
                            非进口
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="IsForeign" id="IsForeign" value="1"/>
                            进口
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3"></label>

                    <button onClick={this.saveVendor} className="btn btn-primary">
                        保存
                    </button>
                    &nbsp;&nbsp;
                    <button className="btn btn-default" onClick={() => {
                            this.props.onCanceled()
                        }}>取消</button>
                </div>

            </Form>
        </div>)
    }
}

export default VendorEditor;
