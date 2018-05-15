import React from 'react';
import Store from './Reducer';

import {Form, Field, createFormControl} from 'form-lib';
import {SchemaModel, StringType} from 'rsuite-schema';

const model = SchemaModel({Name: StringType().isRequired('角色名不能为空')});

/**
 * 药品基础数据编辑组件
 * @extends React.Component
 */
class GoodEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            values: {},
            errors: {},
            isFetching: false
        };

        this.submitGood = this._submitGood.bind(this);
        this.cancel = this._cancel.bind(this);
    }

    _cancel() {
        if (this.props.onCanceled) {
            this.props.onCanceled();
        }
    }

    _submitGood() {
        if (!this.form.check()) {
            this.setState({ message: "数据格式有错误" })
            return;
        }

        let formData = new FormData(document.getElementById('form'));

        fetch('/api/good/save', {
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

    componentDidMount() {
        let {good} = this.props;

        if (good) {
            this.setState({values: good});
        }
    }

    componentWillReceiveProps(nextProps) {
        let {good, action} = nextProps;
        let {good: oldGood} = this.props;

        // console.log({action, good});

        if (good && oldGood) {
            if (good.ID != oldGood.ID) {
                this.setState({values: good});
            }
        } else if (good) {
            this.setState({values: good});
        } else if (action == "add") {
            //添加会员
            this.setState({
                values: {
                    Name: "",
                    OfficalName: "",
                    Unit: "",
                    Dimension: "",
                    DefaultCostPrice: "",
                    DefaultPrice: "",
                    LimitPrice: "",
                    UseWay: "",
                    Manufacturer: ""
                }
            })

            this.form.cleanErrors();
        }
    }

    componentUnMount() {
        // this.unSubscribe();
    }

    render() {
        let {values, errors} = this.state;

        return (<div id="GoodEditor" className="editor_zone">
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
                        <span className="red">*</span>拼音
                    </label>
                    <div className="col-sm-6">
                        <Field name="NamePinYin" id="NamePinYin"/>
                    </div>
                    <p className="text-danger">{errors.NamePinYin}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        <span className="red">*</span>通用名
                    </label>
                    <div className="col-sm-6">
                        <Field name="OfficalName" id="OfficalName"/>
                    </div>
                    <p className="text-danger">{errors.OfficalName}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        <span className="red">*</span>规格
                    </label>
                    <div className="col-sm-6">
                        <Field name="Dimension" id="Dimension"/>
                    </div>
                    <p className="text-danger">{errors.Dimension}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        <span className="red">*</span>剂型
                    </label>
                    <div className="col-sm-6">
                        <Field name="FormOfDrug" id="FormOfDrug"/>
                    </div>
                    <p className="text-danger">{errors.FormOfDrug}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        <span className="red">*</span>单位
                    </label>
                    <div className="col-sm-6">
                        <Field name="Unit" id="Unit"/>
                    </div>
                    <p className="text-danger">{errors.Unit}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        <span className="red">*</span>用法用量
                    </label>

                    <div className="col-sm-6">
                        <Field name="UseWay" id="UseWay"/>
                    </div>

                    <p className="text-danger">{errors.UseWay}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        中标价:
                    </label>
                    <div className="col-sm-6">
                        <Field name="BidPrice" id="BidPrice"/>
                    </div>
                    <p className="text-danger">{errors.BidPrice}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        竞争情况:
                    </label>
                    <div className="col-sm-6">
                        <Field name="Competion" id="Competion"/>
                    </div>
                    <p className="text-danger">{errors.Competion}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        医保情况:
                    </label>
                    <div className="col-sm-6">
                        <Field name="Medicare" id="Medicare"/>
                    </div>
                    <p className="text-danger">{errors.Medicare}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        疗程:
                    </label>
                    <div className="col-sm-6">
                        <Field name="PeriodTreatment" id="PeriodTreatment"/>
                    </div>
                    <p className="text-danger">{errors.PeriodTreatment}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        适应症:
                    </label>
                    <div className="col-sm-6">
                        <Field name="Translation" id="Translation"/>
                    </div>
                    <p className="text-danger">{errors.Translation}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        是否进口:
                    </label>
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
                    <label className="control-label col-sm-3">
                        批准文号:
                    </label>
                    <div className="col-sm-6">
                        <Field name="ApprovalNumber" id="ApprovalNumber"/>
                    </div>
                    <p className="text-danger">{errors.ApprovalNumber}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        默认成本
                    </label>
                    <div className="col-sm-6">
                        <Field name="DefaultCostPrice" id="DefaultCostPrice"/>
                    </div>
                    <p className="text-danger">{errors.DefaultCostPrice}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        默认价格
                    </label>
                    <div className="col-sm-6">
                        <Field name="DefaultPrice" id="DefaultPrice"/>
                    </div>
                    <p className="text-danger">{errors.DefaultPrice}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        权限价格
                    </label>
                    <div className="col-sm-6">
                        <Field name="LimitPrice" id="LimitPrice"/>
                    </div>
                    <p className="text-danger">{errors.LimitPrice}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3">
                        生产厂商
                    </label>
                    <div className="col-sm-6">
                        <Field name="Manufacturer" id="Manufacturer"/>
                    </div>
                    <p className="text-danger">{errors.Manufacturer}</p>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-3"></label>

                    <button onClick={this.submit} className="btn btn-primary">
                        保存
                    </button>
                    &nbsp;&nbsp;
                    <button className="btn btn-default" onClick={this.cancel}>取消</button>
                </div>

            </Form>
        </div>)
    }
}

export default GoodEditor;
