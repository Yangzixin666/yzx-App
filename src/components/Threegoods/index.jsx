import React from 'react';
import { connect } from 'react-redux'
import Recomtitle from '@@/Recomtitle'
import Recomgoods from '@@/Recomgoods'
import { getRecomm } from '@/actions/home'
import './style.less'
export default @connect(state => {
  return {
    recomGoods:state.home.recomGoods
  }
},{
  getRecomm
})
class index extends React.Component {
  state ={
    colorArr:['#f73b61', '#fe6719', '#5fc600']
  }

  componentDidMount() {
    this.props.getRecomm()
  }

  render() {
    const { recomGoods } = this.props;
    const { colorArr } = this.state;
    return <div>
      {
        recomGoods.map((v,i) => {
          return (
            <div key={i} className='threegoods'>
              <Recomtitle title={v.title} colors={colorArr[i]}/>
              <Recomgoods items={v.items}/>
            </div>
          )
        })
      }
      
    </div>;
  }
}


