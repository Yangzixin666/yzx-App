import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { userinfo } from '@/actions/mine'
import { updateUser } from '@/actions/personal'
import imgs from '@/assets/zuo.png'
import img from '@/assets/mine.png'
import { IconFont } from '@@/IconFont'
import api from "@/services/api"
import './style.less'
export default @connect( state => {
  return {
    data:state.mine.data,
  }
},{
  userinfo,
  updateUser
})
class index extends Component {
  state = {
    gender: '',
    head: '',
    nickname: '',
    uid: '',
    show: true,
    img: ''
  }
  componentDidMount () {
    const { data } = this.props
    this.setState({
      ...data
  });
  }
  goback = () => {
    this.props.history.go(-1)
  }
  inputChangeFn = (e, key) => { 
    this.setState({
        [key]: e.target.value.replace(/\s/g,"")//去除输入框中的空格
    });
  }
  appear = () => {
    this.setState({
      show:false
    })
  }
  cancel = () => {
    this.setState({
      show:true
    })
  }
  sex = gender => {
    this.setState({
      show:true,
      gender
    })
  }
  //图片上传
  urls = (e) =>{
    const {uplode}=this.refs
    const formDate=new FormData();
    formDate.append("headfile",uplode.files[0])
    axios.post(`/aps${api.headUpdate}`,formDate)
    .then((res)=>{
      if ( parseInt(res.data.code) === 200 ) {
         this.setState({
          head:`/aps${api.picture}`+ res.data.data.msbox,
          img: res.data.data.msbox
        })
      }
    })
 }
 keep = () => {
  const { gender, nickname, uid, img } = this.state
  const obj = {
    gender,
    head:img,
    uid,
    nickname
  }
  this.props.updateUser(obj)
 }
  render() {
    const { gender, head, nickname, show } = this.state
    return (
      <div className='pages-personal'>
        <header>
        <div className="head-left" onClick={this.goback}>
          <img src={imgs} alt='' />
        </div>
        <div className="head-content">个人资料</div>
        <div className="head-left" onClick={this.keep}>
          <p>保存</p>
        </div>
        </header>
        <section>
        <div className='head'>
          <div className="text">头像</div>
          <div className="imges">
            <img src={head ? head : img } alt='' />
           <input type='file' 
           name="headfile" ref="uplode" 
           onChange={this.urls} 
           className="headfile" />
          </div>
        </div>
        <div className="list">
          <div className="text">昵称</div>
          <div className='desc'>
            <input 
            type='text' 
            value={nickname} 
            placeholder="请输入昵称" 
            onChange={(e) => { this.inputChangeFn(e, 'nickname') }} />
          </div>
          <div className="text">
            <IconFont className="icons" type="icon-iconfontxiangxia1copy19" />
          </div>
        </div>
        <div className="list">
          <div className="text">性别</div>
          <div className='desc'>
           <span onClick={this.appear}> {parseInt(gender) === 1 ? '男' : '女'}</span>
          </div>
          <div className="text">
            <IconFont className="icons" type="icon-iconfontxiangxia1copy19" />
          </div>
        </div>
        </section>
        <div className={show ? 'disappear' : 'appear'}>
        <div className='check'>
          <p>请选择性别</p>
          <p onClick={() =>this.sex(1)}>男</p>
          <p onClick={() =>this.sex(2)}>女</p>
        </div>
          <p className='foot' onClick={this.cancel}>取消</p>
        </div>
      </div>
    )
  }
}
