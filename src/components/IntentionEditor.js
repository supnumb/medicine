import React from 'react';
import Store from './Reducer'

/**
 * 会员意向编辑组件
 * @extends React.Component
 */
class IntentionEditor extends React.Component {
    constructor(props) {
        super(props);

        this.unSubscribe = Store.subscribe(() => {
            let s = Store.getState();
            this.setState(s);
        });

        this.state = Store.getState();
        this.loadObjectDetail = this._loadObjectDetail.bind(this);
        this.submitIntention = this._submitIntention.bind(this);
    }

    _loadObjectDetail() {}

    _submitIntention() {
        let formData=new FormData();

        fetch('/api/good/save', {
            body:formData,
            method:'POST',
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
        return (<div id="IntentionEditor"></div>)
    }
}

export default IntentionEditor;
