import React from 'react';
import {Route, BrowserRouter as Router, Switch, NavLink, Link} from 'react-router-dom';

const MainMenu = () => (<ul id="back_menu">
    <li>
        <NavLink to="/">默认页</NavLink>
    </li>
    <li>
        <NavLink to="/merchant" activeClassName="checked">销售订单</NavLink>
    </li>
    <li>
        <NavLink to="/shops" activeClassName="checked">会员管理</NavLink>
    </li>
    <li>
        <NavLink to="/activity" activeClassName="checked">营销活动</NavLink>
    </li>
    <li>
        <NavLink to="/coupons" activeClassName="checked">优惠劵</NavLink>
    </li>
    <li>
        <NavLink to="/members" activeClassName="checked">会员</NavLink>
    </li>
    <li>
        <NavLink to="/data" activeClassName="checked">数据</NavLink>
    </li>
    <li>
        <NavLink to="/settings" activeClassName="checked">设置</NavLink>
    </li>
    <li>
        <NavLink to="/menus" activeClassName="checked">菜单</NavLink>
    </li>
    <li>
        <NavLink to="/withdrawals" activeClassName="checked">提现申请</NavLink>
    </li>
    <li>
        <NavLink to="/monitor" activeClassName="checked">监控页面</NavLink>
    </li>
</ul>);

export default MainMenu;
