import React from 'react';

import { withRouter } from 'react-router-dom';

class SiteIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch('/api/employee/profile', {
            method: "GET",
            mode: 'same-origin',
            credentials: 'same-origin'
        }).then(res => res.json()).then(json => {
            if (json.code == 0) {
                console.log("加载雇员详细信息", json);
                this.setState({ employee: json.data })
            } else {
                console.log(this);

                this.props.history.push("/employee_signin");
            }
        }).catch(err => console.log(err));
    }

    render() {
        return (<div>
            默认页面
        </div>)
    }
}

export default SiteIndex;
