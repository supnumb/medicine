import React from 'react';
import {Route, BrowserRouter as Router, Switch, NavLink} from 'react-router-dom';
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
    MainMenu
} from './index';

const routes = [
    {
        path: "/orders/",
        extra: true,
        component: OrderList
    }, {
        path: "/receipts/",
        extra: true,
        component: ReceiptList
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
 * 厨师工作台
 * @extends React.Component
 */
class ManagerRouter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            employee: {}
        }
    }

    componentDidMount() {
        // fetch('/api/employee/profile', {
        //     method: "GET",
        //     mode: 'same-origin',
        //     credentials: 'same-origin'
        // }).then(res => res.json()).then(json => {
        //     if (json.code == 0) {
        //         console.log("加载雇员详细信息", json);
        //         this.setState({employee: json.data})
        //     } else {
        //         alert(json.message);
        //     }
        // }).catch(err => console.log(err));
    }

    render() {
        let {employee} = this.state;

        return (<Router>
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top">
                    <h2>美信康年大药房</h2>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        {/* 左侧菜单 */}
                        <div className="col-md-1 sidebar"><MainMenu/></div>
                        {/* 右侧内容 */}
                        <Switch>
                            {
                                routes.map((route, i) => {
                                    return (<Container key={i} Employee={employee} {...route}/>)
                                })
                            }
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>);
    }
}

// export default ManagerRouter;

export default hot(module)(ManagerRouter)

