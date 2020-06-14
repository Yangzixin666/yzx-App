import React, { Component } from 'react'
import { Switch, message } from 'antd'
import { connect } from 'react-redux'
import Header from '@@/Header'
import { toReg } from '@/actions/reg'
import axios from 'axios'
import api from "@/services/api"
import './style.less'
message.config({
  top: 150,
  duration: 1,
  maxCount: 1,
});
export default @connect (state => {
  return {}
},{
  toReg,
})
class index extends Component {
  state={
    cellphone:"",
    check:"password",
    password:'',
    vcode:'',
    img:""
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
  //点击注册按钮
  logins = () => {
    const { cellphone, password,vcode} = this.state
    //手机号正则
    const reg=/^[1][3,4,5,7,8][0-9]{9}$/
    //判断验证码手，机号和密码是否输入，并且手机号是否符合规则
    if( !vcode ) {
      message.info('请输入验证码')
    } else if (!cellphone){
      message.info('请输入手机号')
    } else if (!reg.test(cellphone)) {
      message.info('您输入的手机号格式不正确')
    } else if ( !password ) {
      message.info('请输入密码')
    } else {
      const obj={
        cellphone,
        password,
        vcode
      }
      this.props.toReg(obj)
    }
  }
  componentDidMount () {
    this.imgs()
  }
  imgs = () => {
    const nowtime = new Date().getTime()
    axios.post(`/aps${api.code}&nowtime=`+nowtime).then (res => {
    this.setState({
      img:res.config.url
    })
    })
  }
  render() {
    const { check, cellphone, password, vcode,img} = this.state
    return (
      <div className="pages-reg">
        <Header name="注册" />
        <div className="reg-content">
        <p className="reg-inputs">
            <input type="text" 
             value={vcode} 
             placeholder="验证码" 
             onChange={(e) => { this.inputChangeFn(e, 'vcode') }}
             />
             <img className='reg-img'
             src={img}
             alt="" 
             onClick={this.imgs}
             />
          </p>
          <p className="reg-inputs">
            <input type="text" 
             value={cellphone} 
             placeholder="手机号" 
             onChange={(e) => { this.inputChangeFn(e, 'cellphone') }}
             />
             <button className="rge-code">获取短信验证码</button>
          </p>
          <p className="reg-inputs">
            <input type="number" 
             placeholder="请输入短信验证码" 
             />
          </p>
          <p className="reg-inputs">
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
          <p className="reg-inputs reg-in">
            <button onClick={this.logins}>注册</button>
          </p>
         </div>
      </div>
    )
  }
}
