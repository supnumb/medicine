import React from 'react';
import { Route, BrowserRouter as Router, Switch, NavLink,  } from 'react-router-dom';
import { hot } from 'react-hot-loader'

import {
    GoodList,
    OrderList,
    ReceiptList,
    StatsList,
    MemberList,
    VendorList,
    SiteIndex,
    Container,
    MainMenu,
    OrderEditor,
    ReceiptEditor,
    EmployeeSignIn
} from './index';

import '../../public/stylesheets/rsuite.less';

const routes = [
    {
        path: "/employee/signin",
        extra: true,
        component: EmployeeSignIn
    },
    {
        path: "/orders/",
        extra: true,
        component: OrderList
    }, {
        path: "/order/editor",
        extra: true,
        component: OrderEditor
    }, {
        path: "/receipts/",
        extra: true,
        component: ReceiptList
    }, {
        path: "/receipt/editor",
        extra: true,
        component: ReceiptEditor
    }, {
        path: "/stats/",
        extra: true,
        component: StatsList
    }, {
        path: "/members/",
        extra: true,
        component: MemberList
    }, {
        path: "/vendors/",
        extra: true,
        component: VendorList
    }, {
        path: "/goods/",
        extra: true,
        component: GoodList
    }, {
        path: "/back_index",
        extra: true,
        component: SiteIndex
    }
];

/**
 * 药师工作台
 * @extends React.Component
 */
class ManagerRouter extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            employee: {}
        }
    }

    render() {
        let { employee } = this.state;

        return (<Router>
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top">
                    <h2>美信康年大药房</h2>
                </div>
                <div className="container-fluid">
                    {/* <div className="container"> */}
                    <div className="row">
                        {/* 左侧菜单 */}
                        <div className="col-md-1 sidebar"><MainMenu /></div>
                        {/* 右侧内容 */}
                        <Switch>
                            {
                                routes.map((route, i) => {
                                    return (<Container key={i} Employee={employee} {...route} />)
                                })
                            }
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>);
    }
}

export default hot(module)(ManagerRouter)
