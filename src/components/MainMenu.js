import React from 'react';
import {Route, BrowserRouter as Router, Switch, NavLink, Link} from 'react-router-dom';

const MainMenu = () => (<ul id="back_menu" className="nav nav-sidebar">
    <li>
        <NavLink to="/back_index">默认页</NavLink>
    </li>
    <li>
        <NavLink to="/orders" activeClassName="checked">销售订单</NavLink>
    </li>
    <li>
        <NavLink to="/receipts" activeClassName="checked">进货单</NavLink>
    </li>
    <li>
        <NavLink to="/stats" activeClassName="checked">数据</NavLink>
    </li>
    <li>
        <NavLink to="/members" activeClassName="checked">会员</NavLink>
    </li>
    <li>
        <NavLink to="/goods" activeClassName="checked">药品</NavLink>
    </li>
    <li>
        <NavLink to="/vendors" activeClassName="checked">供应商</NavLink>
    </li>

</ul>);

export default MainMenu;
