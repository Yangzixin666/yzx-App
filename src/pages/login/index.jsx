import React, { Component } from 'react'
import { Switch,message } from 'antd'
import { connect } from 'react-redux'
import Header from '@@/Header'
import { loginInfo } from '@/actions/login'
import { IconFont } from '@@/IconFont'
import './style.less'
message.config({
  top: 150,
  duration: 1,
  maxCount: 1,
});
export default @connect ( state => {
  return {}
},{
  loginInfo,
})
class index extends Component {
  state={
    cellphone:"",
    check:"password",
    password:''
  }
  //switch开关控制
  onChange = (checked) => {
   if ( checked ) {
     this.setState ({
       check:'text'
     })
   } else {
    this.setState ({
      check:'password'
    })
   }
  }
  //表单change事件
  inputChangeFn = (e, key) => { 
    this.setState({
        [key]: e.target.value.replace(/\s/g,"")//去除输入框中的空格
    });
  }
//跳到注册页面
  jump = () => {
    this.props.history.push("/reg")
  }
  //点击登录按钮
  logins = () => {
    const { cellphone, password} = this.state
    //手机号正则
    const reg=/^[1][3,4,5,7,8][0-9]{9}$/
    //判断手机号和密码是否输入，并且手机号是否符合规则
    if (!cellphone){
      message.info('请输入手机号')
    } else if (!reg.test(cellphone)) {
      message.info('您输入的手机号格式不正确')
    } else if ( !password ) {
      message.info('请输入密码')
    } else {
      const obj={
        cellphone,
        password
      }
      this.props.loginInfo(obj)
    }
  }
  render() {
    const { check, cellphone, password} = this.state
    return (
      <div className="pages-login">
         <Header name='登录' />
         <div className="login-content">
          <p className="login-inputs">
            <input type="text" 
             value={cellphone} 
             placeholder="手机号" 
             onChange={(e) => { this.inputChangeFn(e, 'cellphone') }}
             />
          </p>
          <p className="login-inputs">
            <input 
            type={check} 
            value={password} 
            placeholder="密码" 
            onChange={(e) => { this.inputChangeFn(e, 'password') }}
            />
            <Switch 
            defaultChecked={false} 
            onChange={this.onChange}
            />
          </p>
          <p className="login-inputs login-in">
            <button onClick={this.logins}>登录</button>
          </p>
          <p className="login-inputs login-in">
            <span><IconFont type="icon-mima" />忘记密码</span>
            <span onClick={this.jump}><IconFont type="icon-shouji" />快速注册</span>
          </p>
         </div>
       </div>
    )
  }
}
