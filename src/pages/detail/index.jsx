import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { goodsRight } from '@/actions/goods'
import "./style.less"
export default @connect(state => {
  return {
    rightdata:state.goods.rightdata
  }
},{
  goodsRight,
})
class idnex extends Component {
  componentDidMount () {
    var id=this.props.match.params.cid
    localStorage.setItem('cid',id)
    this.props.goodsRight(id)
  }
  componentWillReceiveProps(nextProps) {
      var id=nextProps.match.params.cid
      if ( id !== localStorage.getItem('cid') ) {
        localStorage.setItem('cid',id)
        this.props.goodsRight(id)
      }
  }
  render() {
    const { rightdata } = this.props
    return (
        <Fragment>
        {
            rightdata instanceof Array?  rightdata.map( val => {
                return (
                    <div key={val.cid} className="wu">
                    <p>{val.title}</p>
                    <div className="wu-dl">
                    {
                        val.goods!=null ? val.goods.map( v => {
                            return (
                                <Link key={v.gid} to={`/details/${v.gid}`}>
                                  <dl>
                                    <dt><img src={v.image} alt="" /></dt>
                                    <dd>{v.title}</dd>
                                  </dl>
                                </Link>
                                )
                        }) :<p style={{width:'100%',height:'0.1rem',background:'#ffffff'}}></p>
                    }
                    </div>
                    </div>
                )
            }) : <p style={{textAlign:'center',fontSize:'0.3rem',paddingTop:'0.2rem'}}>暂无相关宝贝</p>
        }
      </Fragment>
    )
  }
}
