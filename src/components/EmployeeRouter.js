import React from 'react';
import { Route, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
import { hot } from 'react-hot-loader'

import {
    EmployeeSignIn,
    Container
} from './index';

import '../../public/stylesheets/rsuite.less';

const routes = [
    {
        path: "/employee_signin/",
        extra: true,
        component: EmployeeSignIn
    },
];

/**
 * 药师工作台
 * @extends React.Component
 */
class EmployeeRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Router>
            <div>
                <div className="container" style={{ "width": "450px" }}>
                    {/* <div className="container"> */}
                    <div className="row">
                        {/* 右侧内容 */}
                        <Switch>
                            {
                                routes.map((route, i) => {
                                    return (<Container key={i}  {...route} />)
                                })
                            }
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>);
    }
}

export default hot(module)(EmployeeRouter)
