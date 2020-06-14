import React from 'react';
import { Icon } from 'antd';
import { Switch, Route, NavLink } from 'react-router-dom'
import {  Home } from '@/router/assembly';
import './index.less'
export default class Basic extends React.Component {
  render() {
    return <div className='layout-basic'>
       <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <ul className='navs'>
        <li><NavLink to='/' exact activeClassName='abc'><Icon type="home" /><span>首页</span></NavLink></li>
        <li><NavLink to='/cart' activeClassName='abc'><Icon type="shopping-cart" /><span>购物车</span> </NavLink></li>
        <li><NavLink to='/mine' activeClassName='abc'><Icon type="user" /><span>我的</span></NavLink></li>
      </ul>
    </div>;
  }
}


