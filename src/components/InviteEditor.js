import React from 'react';
import Store from './Reducer'

/**
 * 客户回访编辑组件
 * @extends React.Component
 */
class InviteEditor extends React.Component {
    constructor(props) {
        super(props);

        this.unSubscribe = Store.subscribe(() => {
            let s = Store.getState();
            this.setState(s);
        });

        this.state = Store.getState();
        this.loadObjectDetail = this._loadObjectDetail.bind(this);
        this.submitInvite = this._submitInvite.bind(this);
    }

    _loadObjectDetail() {}

    _submitInvite() {
        let formData = new FormData();

        formData.append("MemberID", 1);
        formData.append("Remarks", "客户回访记录随机内容" + new Date().getTime());

        fetch('/api/visit/save', {
            body: formData,
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin'
        }).then(res => res.json()).then(json => {
            //TODO
        }).catch(err => {
            console.error(err);
        });
    }

    componentDidMount() {
        let {location} = this.props
        let {state} = location;

    }

    componentUnMount() {
        this.unSubscribe();
    }

    render() {
        return (<div id="InviteEditor">
            <span>客户回访记录：</span>
            <textarea name="remark" id="remark" cols="30" rows="10"></textarea>
        </div>)
    }
}

export default InviteEditor;
