import React from 'react';

class SiteIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (<div>
            <nav class="navbar navbar-inverse navbar-fixed-top"></nav>
            <div class="container-fluid">
                {/* 左侧菜单 */}
                <div class="col-sm-3 col-md-2 sidebar">左侧菜单</div>
                {/* 右侧内容 */}
                <div class="col-sm-9 col-sm-offset-3 col-md-5 col-md-offset-3 main">右侧内容</div>
            </div>
        </div>)
    }
}

export default SiteIndex;
