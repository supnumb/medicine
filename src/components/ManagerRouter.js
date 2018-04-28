import React from 'react';
import {Route, BrowserRouter as Router, Switch, NavLink} from 'react-router-dom';

import {GoodList,SiteIndex} from './index';

console.log({Router})

const routes = [
    {
        path: "/goods/index",
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
        fetch('/api/employee/profile', {
            method: "GET",
            mode: 'same-origin',
            credentials: 'same-origin'
        }).then(res => res.json()).then(json => {
            if (json.code == 0) {
                console.log("加载雇员详细信息", json);
                this.setState({employee: json.data})
            } else {
                alert(json.message);
            }
        }).catch(err => console.log(err));
    }

    render() {
        let {employee} = this.state;


        {/* <Switch>
            {
                routes.map((route, i) => {
                    return (<Container key={i} Employee={employee} {...route}/>)
                })
            }
        </Switch> */}
        return ("<Router></Router>");
        // return (<Router></Router>);
    }
}

export default ManagerRouter;
