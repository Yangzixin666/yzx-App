import React from 'react';
import Renderbott from '@@/Renderbott'
import './style.less'
export default class index extends React.Component {
  getData = () => {
    let arr = [],brr=[]
    const { items } = this.props
    items.forEach((v,i) => {
      i < 2 ?  arr.push(v) :brr.push(v)
    })
    return {arr,brr}
  }
  render() {
    const { arr, brr } = this.getData();
    return <div className='home_goods_six'>
      <div className='goods_top_left'>
        {
          arr.map((v, i) => {
            return  <dl key={v.gid}>
              <dt>
              <p>火爆开售</p>
              <img src={v.image} alt='' />
              </dt>
              <dd>{v.title}</dd>
            </dl>
          })
        }
      </div> 
      <Renderbott item={brr} />
    </div>;
  }
}


