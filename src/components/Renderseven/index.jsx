import React from 'react';
import './style.less'
import Seventop from '@@/Seventop'
import Renderbott from '@@/Renderbott'
export default class index extends React.Component {
  getData = () => {
    let arr = [],brr=[]
    const { items } = this.props
    items.forEach((v,i) => {
      i < 3 ?  arr.push(v) :brr.push(v)
    })
    return {arr,brr}
  }
  render() {
    const { arr, brr } = this.getData();
    return (
      <div className='home_goods_seven'>
        <Seventop item={arr} />
        <Renderbott item={brr} />
    </div>);
  }
}


