import React from 'react';
import Store from './Reducer'

/**
 * 药品基础数据编辑组件
 * @extends React.Component
 */
class MemberEditor extends React.Component {
    constructor(props) {
        super(props);

        this.unSubscribe = Store.subscribe(() => {
            let s = Store.getState();
            this.setState(s);
        });

        this.state = Store.getState();
        this.loadObjectDetail = this._loadObjectDetail.bind(this);
        this.submit = this._submit.bind(this);
    }

    _loadObjectDetail() {}

    _submit() {
        let formData = new FormData();

        fetch('/api/member/add', {
            body: formData,
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin'
        }).then(res => res.json()).then(json => {
            //TODO
        }).catch(err => {
            console.error(err);
        })
    }

    componentDidMount() {
        let {location} = this.props
        let {state} = location;

    }

    componentUnMount() {
        this.unSubscribe();
    }

    render() {
        return (<div id="MemberEditor">
            会员编辑页面
        </div>)
    }
}

export default MemberEditor;
