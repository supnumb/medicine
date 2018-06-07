import React from 'react';

/**
 * 会员详情页面
 */
class MemberDetail extends React.Component {
    constructor(props) {
        super(props);

        this.unSubscribe = Store.subscribe(() => {
            let s = Store.getState();
            this.setState(s);
        }); 
        
        this.state = Store.getState();
    }

    _loadMemberDetail(){

    }

    componentDidMount(){}

    render() {
        return (<div id='MemberDetail
    '></div>)
    }
}

export default MemberDetail;