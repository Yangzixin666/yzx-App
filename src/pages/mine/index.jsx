import React from 'react'
import Header from '@@/Header'
import { connect } from 'react-redux'
import { userinfo } from '@/actions/mine'
import { outinfo } from '@/actions/login'
import { Link } from 'react-router-dom'
import imgs from '@/assets/mine.png'
import { IconFont } from '@@/IconFont'
import './style.less'

export default @connect(state => {
  return {
    data:state.mine.data,
    Logindata:state.login.data
  }
},{
  userinfo,
  outinfo,
})
class index extends React.Component {
  state = {
    show:true
  }
  componentDidMount () {
    //调用获取用户 信息函数
    const { Logindata } = this.props
    if ( Logindata ) {
      this.props.userinfo()
    }
  }
  //退出或者登录
  toOut = () => {
    const { data } = this.props
    if ( data ) {
      this.setState({
        show:!this.state.show
      })
    } else {
      this.props.history.push("/login")
    }
  }
  //点击取消
  disapper = () => {
    this.setState({
      show:!this.state.show
    })
  }
  //点击确认
  appear = () => {
    const { Logindata } = this.props
    this.setState({
      show:!this.state.show
    })
    const obj = {
      uid:Logindata.uid
    }
    this.props.outinfo(obj)
  }
  render() {
    const { data } = this.props
    const { show } = this.state
    return (
      <div className="pages-mine">
        <Header name = "会员中心"/>
        <div className="mine-header">
          <dl>
            <dt><img src={data.head ? data.head : imgs} alt="" /></dt>
            <dd>
            <p>{data ? data.nickname : '昵称'}</p>
            <p>我的积分：{data ? data.points : '0'}</p>
            </dd>
          </dl>
        </div>
        <div className="all-order">
          <p className='left'>全部订单</p>
          <p className='right'>查看全部订单 ></p>
        </div>
        <div className="order-item">
          <dl>
            <dt><IconFont className="icons" type="icon-daizhifu" /></dt>
            <dd>待支付</dd>
          </dl>
          <dl>
            <dt><IconFont className="icons" type="icon-daishouhuo" /></dt>
            <dd>待收货</dd>
          </dl>
          <dl>
            <dt><IconFont className="icons" type="icon-daipingjia4" /></dt>
            <dd>待评价</dd>
          </dl>
        </div>
        <div className="my-list">
          <ul>
            <li>个人资料</li>
            <li>
              <Link to='/Personal'>
                <IconFont className="icons" type="icon-iconfontxiangxia1copy19" />
              </Link>
            </li>
          </ul>
          <ul>
            <li>地址管理</li>
            <li>
              <IconFont className="icons" type="icon-iconfontxiangxia1copy19" />
            </li>
          </ul>
          <ul>
            <li>绑定手机</li>
            <li>
              <Link to='/iphone'>
                <IconFont className="icons" type="icon-iconfontxiangxia1copy19" />
              </Link>
            </li>
          </ul>
          <ul>
            <li>修改密码</li>
            <li>
              <Link to='/changePassword'>
              <IconFont className="icons" type="icon-iconfontxiangxia1copy19" />
              </Link>
            </li>
          </ul>
          <ul>
            <li>我的收藏</li>
            <li>
              <Link to='/collection'>
                <IconFont 
                className="icons" 
                type="icon-iconfontxiangxia1copy19" 
                />
              </Link> 
            </li>
          </ul>
        </div>
        <div className="btn-area">
          <button onClick={this.toOut}>{data ? "安全退出" : "登录/注册"}</button>
        </div>
        <div className={show? 'disappear' : 'appear'}>
          <div className="out">
            <p>确认要退出吗？</p>
            <div>
              <p onClick={this.disapper}>取消</p>
              <p style={{color:"orange"}} onClick={this.appear}>确定</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

