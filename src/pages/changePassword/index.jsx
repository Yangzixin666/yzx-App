import React, { Component } from 'react'
import { Switch, message } from 'antd'
import { connect } from 'react-redux'
import { changePassword } from '@/actions/changePassword'
import Header from '@@/Header'
import './style.less'
message.config({
  top: 200,
  duration: 1,
  maxCount: 1,
});
export default @connect(state => {
  return {}
},{
  changePassword,
})
class index extends Component {
  state={
    check:"password",
    pwd:'',
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
  //提交按钮
  add = () => {
    const { pwd } = this.state
    if( !pwd ) {
      message.info('请输入密码')
    } else if ( pwd.length<6 ) {
      message.info('您输入的密码必须大于6位数')
    } else {
      const obj = {
        uid:localStorage.getItem('uid'),
        pwd
      }
      this.props.changePassword(obj)
    }
  }
  render() {
    const { check,pwd,} = this.state
    return (
      <div className="pages-change">
        <Header name = '修改密码'/>
        <p className='form-chenge'>
        <input 
        type={check} 
        value={pwd} 
        placeholder="请输入大于6位的登录密码" 
        onChange={(e) => { this.inputChangeFn(e, 'pwd') }}
        />
        <Switch 
            defaultChecked={false} 
            onChange={this.onChange}
            />
        </p>
        <button className="button" onClick={this.add}>提交</button>
      </div>
    )
  }
}
