import React from 'react';
export default class index extends React.Component {
  render() {
    const { item } = this.props;
      return  <div className='goods_top_rig'>
        {
          item.map((v,i)=> {
            return <dl key={v.gid}>
              <dt>
              <img src={v.image} alt='' /></dt>
              <dd>
              {v.title}
              <p style={{textAlign:'center',color:'#7B7F82',fontSize:'0.2rem'}}>{i%2===0 ? "品质精挑" : "品质精挑4折起"}</p>
              </dd>
            </dl>
          })
        }
    </div>
  }
}


