import React from 'react';
import Store from './Reducer'

import IntentionList from './IntentionList';
import { Icon, RadioGroup, Radio, CheckPicker } from 'rsuite';

import { Form, Field, createFormControl } from 'form-lib';
import { SchemaModel, StringType, ArrayType } from 'rsuite-schema';
const TextareaField = createFormControl('textarea');

const model = SchemaModel({ Goods: ArrayType().rangeLength(1, 5, '请选择意向药品(1~5)') });

/**
 * 会员意向编辑组件
 * @extends React.Component
 */
class IntentionEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            values: { Tags: "咨询" },
            errors: {},
            isFetching: false,
            updateIntention: null,
            goods: []
        };

        this.submitIntention = this._submitIntention.bind(this);
        this.loadGoodListFromDB = this._loadGoodListFromDB.bind(this);
    }


    _loadGoodListFromDB(keyword) {
        let data = { KeyWord: keyword, Page: 0, Limit: 1000 };

        fetch('/api/good/search', {
            body: JSON.stringify(data),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            if (json.code == 0) {
                let _goods = json.data.map(g => { return { value: g.ID, label: g.Name } })
                this.setState({ goods: _goods, isFetching: false });
            } else {
                alert(json.message);
                this.setState({ isFetching: false })
            }
        }).catch(err => {
            console.error(err);
            this.setState({ isFetching: false })
        })
    }

    _submitIntention() {
        if (!this.form.check()) {
            alert("请选择意向商品")
            return;
        }

        this.setState({ isFetching: true });

        let { values, goods } = this.state;
        let { member } = this.props;

        let selected = goods.filter(g => {

            for (let i = 0; i < values.Goods.length; i++) {
                if (g.value === values.Goods[i]) {
                    return true;
                }
            }

            return false;
        });

        let _goodsStr = selected.map(s => s.label);

        let postData = {
            MemberID: member.ID,
            Goods: _goodsStr,
            OtherGoods: values.OtherGoods || '',
            Tags: values.Tags
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
                    this.setState({ updateIntention: json.data, values: { Goods: [] }, isFetching: false });
                } else {
                    this.setState({ updateIntention: json.data, values: { Goods: [] }, isFetching: false });
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

        this.loadGoodListFromDB();
    }

    render() {
        let { member } = this.props;
        let { values, errors, isFetching, updateIntention, goods } = this.state;

        console.log({ values });

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
                        <RadioGroup name="Tags" inline={true} value={values.Tags} defaultValue={"咨询"} onChange={
                            (value) => {
                                let { values } = this.state;
                                values.Tags = value;
                                this.setState({ values })
                            }
                        }>
                            <Radio value="咨询">咨询</Radio>
                            <Radio value="待跟踪">待跟踪</Radio>
                            <Radio value="意向">意向</Radio>
                            <Radio value="成交">成交</Radio>
                            <Radio value="重复购买">重复购买</Radio>
                            <Radio value="不再需要">不再需要</Radio>
                        </RadioGroup>
                    </div>
                </div>

                <div className="form-group">
                    <label>
                        意向药品
                    </label>
                    <CheckPicker data={goods} onSelect={(value, item, event) => {
                        values.Goods = value;
                        this.setState({ values })
                    }} />
                    <Field type="hidden" name="MemberID"></Field>
                    <p className="text-danger">{errors.Remark}</p>
                </div>

                <div className="form-group">
                    <label>
                        其它药品
                    </label>
                    <Field name="OtherGoods" id="OtherGoods" accepter={TextareaField} />
                    <p className="text-danger">{errors.Remark}</p>
                </div>

                <div className="form-group">
                    <button onClick={this.submitIntention} className="btn btn-primary">
                        {isFetching ? "正在保存..." : "保存"}
                    </button>
                    &nbsp;&nbsp;
                    <button className="btn btn-default" onClick={this.cancel}>取消</button>
                </div>
            </Form>
        </div>)
    }
}

export default IntentionEditor;
