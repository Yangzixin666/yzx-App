import React, { Component } from 'react'
import { message } from 'antd'
import { connect } from 'react-redux'
import Header from '@@/Header'
import { IconFont } from '@@/IconFont'
import { iphone } from '@/actions/iphone'
import './style.less'
message.config({
  top: 300,
  duration: 1,
  maxCount: 1,
});
export default @connect (state => {
  return {}
},{
  iphone
})
class index extends Component {
  state = {
    cellphone:'',
    vcode:''
  }
  //表单change事件
  inputChangeFn = (e, key) => { 
    this.setState({
        [key]: e.target.value.replace(/\s/g,"")//去除输入框中的空格
    });
  }
  //下一步
  nexts = () => {
    const { cellphone, vcode} = this.state
    //手机号正则
    const reg=/^[1][3,4,5,7,8][0-9]{9}$/
    //判断手机号和密码是否输入，并且手机号是否符合规则
    if (!cellphone){
      message.info('请输入手机号')
    } else if (!reg.test(cellphone)) {
      message.info('您输入的手机号格式不正确')
    } else if ( !vcode ) {
      message.info('请输入验证码')
    } else {
      const obj={
        cellphone,
        vcode,
        uid:localStorage.getItem('uid')
      }
      this.props.iphone(obj)
    }
  }
  render() {
    const { cellphone, vcode } = this.state
    return (
      <div className="pages-iphone">
        <Header name = '绑定手机'/>
        <div className='iphon-tip'>
          <div className='left'>
            <IconFont type="icon-zhuyi" />
          </div>
          <div className='right'>
            新手机号验证后，即可绑定成功！
          </div>
        </div>
        <p>
          <input 
            type="number"
            placeholder="绑定手机号码" 
            value={cellphone}
            onChange={(e) => { this.inputChangeFn(e, 'cellphone') }}/>
        </p>
        <p>
          <input 
            type="number"
            placeholder="请输入验证码" 
            value={vcode}
            onChange={(e) => { this.inputChangeFn(e, 'vcode') }}/>
        </p>
          <button onClick={this.nexts}>下一步</button>
      </div>
    )
  }
}
