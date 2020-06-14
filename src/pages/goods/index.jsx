import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import imgs from '@/assets/zuo.png'
import { connect } from 'react-redux'
import { goodsLeft } from '@/actions/goods'
import Detail from '@/pages/detail'
import './style.less'
export default @connect(({goods}) => {
  return {
    leftdata:goods.leftdata
  }
},{
  goodsLeft,
})
class index extends Component {
  componentDidMount () {
    this.props.goodsLeft()
  }
  onclick = () => {
    this.props.history.go(-1)
  }
  render() {
    const { leftdata } = this.props
    return (
      <div className="pages-goods">
        <header>
          <div className="head-left" onClick={this.onclick}>
            <img  src={imgs} alt=""/>
          </div>
          <div className="head-right">
            <input placeholder="请输入宝贝名称" />
          </div>
        </header>
        <section>
          <div className="section-left">
            {
              leftdata.map(v => {
                return (
                 <NavLink 
                 key={v.cid} 
                 replace
                 to={`/goods/detail/${v.cid}`}
                 activeClassName="active"
                 >
                  <p >{v.title}</p>
                 </NavLink>
                )
              })
            }
          </div>
          <div className="section-second"></div>
          <div className="section-right">
            <Switch>
              <Route path="/goods/detail/:cid" component={Detail} />
              <Redirect  to="/goods/detail/492"  />
            </Switch>
          </div>
          <div className="section-second"></div>
        </section>
      </div>
    )
  }
}
