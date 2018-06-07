import React from 'react';
import { Route, BrowserRouter as Router, Switch, NavLink, } from 'react-router-dom';
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
    // {
    //     path: "/employee/signin",
    //     extra: true,
    //     component: EmployeeSignIn
    // },
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
                alert(json.message);
                // this.props.history.push("/employee_signin");
            }
        }).catch(err => console.log(err));
    }

    render() {
        let { employee } = this.state;

        return (<Router>
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/back_index">美信康年大药房</a>
                    </div>
                    <ul className="nav navbar-top-links navbar-right">

                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down">{employee.Name}</i>
                            </a>
                            <ul className="dropdown-menu dropdown-user">
                                <li><a href="/employee_signin">Logout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
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
