import React from 'react';
import { connect } from 'react-redux'
import { Icon} from 'antd'
import { withRouter, Link } from 'react-router-dom'
import { IconFont } from '@@/IconFont'
import './style.less'
export default @connect (state => {
  return {
    data:state.login.data
  }
})
@withRouter
class index extends React.Component {

  componentDidMount () {
    const head =  document.getElementsByClassName('home_head')[0]
    window.onscroll = () => {
      if(document.documentElement.scrollTop > 100){
        head.style.background = 'linear-gradient(red, white)';
      }else{
        head.style.background = 'none';
      }
    }
  }

  tologin = () => {
    const { data } = this.props
    if( data ) {
      this.props.history.push('/mine')
    } else {
      this.props.history.push('/login')
    }
  }
  render() {
    const { data } = this.props
    return (
      <div className='home_head'>
        <div className="home_head_left" >
        <Link to='/goods'><Icon type="bars" /></Link>
        </div>
        <div className="home_head_warp">
        <Icon type="search" id='icon_sear'/>
          <input placeholder='输入喜欢的宝贝名称'/>
        </div>
        <div className="home_head_right" onClick={this.tologin}>
        {data ? <IconFont type="icon-wode1" /> : '登录'}
        </div>
    </div>
    )
  }
}