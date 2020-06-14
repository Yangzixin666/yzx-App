import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import  PropTypes from "prop-types"
import imgs from '@/assets/zuo.png'
import './style.less'
class index extends Component {
   //propTypes定义属性约束
   static propTypes = {
    data : PropTypes.string
  }
  onBack = () => {
    this.props.history.go(-1)
  }
  render() {
    return ( <header>
        <div className="Head_left" onClick={this.onBack}>
        <img src={imgs} alt="" />
        </div>
        <div className="Head_warp">{this.props.name}</div>
        <div className="Head_right"></div>
      </header>
    )
  }
}
export default withRouter (index)