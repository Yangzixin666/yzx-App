import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon } from 'antd';
import './style.less'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1844272_47q5xfpxvlm.js',
});

export default @connect(state => {
  return { home: state.home }
})

class Recommend extends Component {
  render() {
    const { recommends } = this.props.home;
    return (
      <div className="common-recommend">
        <div className="recommend-title">
          <div className='title-line'></div>
          <div className='title-text'>
            <span><IconFont type="icon-xihuan" style={{'color': 'red'}} /></span>
            为您推荐
          </div>
          <div className='title-line'></div>
        </div>
        <div className="recommend-goods">
          {
            recommends.map(v => {
              return (
                <div className="goods-list" key={v.gid}>
                  <dl>
                    <dt><img src={v.image} alt="" /></dt>
                    <dd>
                      <p>{v.title}</p>
                      <p>￥{v.price}</p>
                    </dd>
                  </dl>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
