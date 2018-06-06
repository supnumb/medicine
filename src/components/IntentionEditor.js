import React from 'react';
import Store from './Reducer'

import IntentionList from './IntentionList';
import { Icon, RadioGroup, Radio } from 'rsuite';

import { Form, Field, createFormControl } from 'form-lib';
import { SchemaModel, StringType } from 'rsuite-schema';
const TextareaField = createFormControl('textarea');

const model = SchemaModel({ Goods: StringType().isRequired('请输入意向药品') });

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
            isFetching: false,
            updateIntention: null
        };

        this.loadObjectDetail = this._loadObjectDetail.bind(this);
        this.submitIntention = this._submitIntention.bind(this);
    }

    _loadObjectDetail() { }

    _submitIntention() {

        if (!this.form.check()) {
            this.setState({ message: "请输入意向药品" });
            return;
        }

        console.log("ssss");


        this.setState({ isFetching: true });

        let { values } = this.state;
        let { member } = this.props;

        console.log(values);

        let postData = {
            MemberID: member.ID,
            Goods: values.Goods
        }

        fetch('/api/intention/save', {
            body: JSON.stringify(postData),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            console.log(json);

            if (json.code == 0) {
                if (this.props.onSaveCompleted) {
                    this.setState({ updateIntention: json.data, values: { Goods: "" }, isFetching: false });
                } else {
                    this.setState({ updateIntention: json.data, values: { Goods: "" }, isFetching: false });
                    alert(json.message)
                }
            } else {
                this.setState({ isFetching: false });
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    componentWillReceiveProps(nextProps) {
        let { member } = nextProps;
        let { member: oldMember } = this.props;

        if (member.ID != oldMember.ID) {
            this.setState({ values: member });
        }
    }

    componentDidMount() {
        let { member } = this.props;
        if (member) {
            this.setState({ values: member });
        }
    }

    render() {
        let { member } = this.props;
        let { values, errors, isFetching, updateIntention } = this.state;

        return (<div id="IntentionEditor">
            <IntentionList member={member} updateIntention={updateIntention} />

            <Form ref={ref => this.form = ref} values={values} id="form" model={model} onChange={(values) => {
                this.setState({ values });
                this.form.cleanErrors();
            }} onCheck={(errors) => {
                this.setState({ errors })
            }}>

                <div className="form-group">
                    <label>
                        标签
                    </label>
                    <div>
                        <RadioGroup name="IsForeign" inline={true} value={values.IsForeign} onChange={
                            (value) => {
                                let { values } = this.state;
                                values.IsForeign = value;
                                this.setState({ values })
                            }
                        }>
                            <Radio value="0">已经放弃</Radio>
                            <Radio value="1">准备购买</Radio>
                        </RadioGroup>
                    </div>
                </div>

                <div className="form-group">
                    <label>
                        意向药品
                    </label>
                    <Field name="Goods" id="Goods" accepter={TextareaField} />
                    <Field type="hidden" name="MemberID"></Field>
                    <p className="text-danger">{errors.Remark}</p>
                </div>

                <div className="form-group">
                    <button disabled={isFetching} onClick={this.submitIntention} className="btn btn-primary">
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
