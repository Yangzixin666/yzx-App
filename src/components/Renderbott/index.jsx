import React from 'react';
import './style.less'
export default class index extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className='home_goods_seven_bot'>
      {
        item.map(v => {
          return <dl key={v.gid}>
            <dt><img src={v.image} alt='' /></dt>
            <dd>{v.title}</dd>
            <p>￥{v.price}</p>
          </dl>
        })
      }
    </div>);
  }
}