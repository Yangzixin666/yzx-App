import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { connect } from 'react-redux'
import Header from '@@/Header'
import { colecdata, colecDeldata } from '@/actions/collection'
import './style.less'
export default @connect( state => {
  return {
    collectionData:state.collection.collectionData,
    pagenum:state.collection.pagenum,
    page:state.collection.page,
  }
},{
  colecdata,
  colecDeldata
})
class index extends Component {
  state = {
    show:true
  }
  componentDidMount () {
    this.loadFunc()
  }
  loadFunc = () => {
   let { pagenum, collectionData, page} = this.props
    const uid = localStorage.getItem('uid')
    if ( pagenum && collectionData.length >= pagenum) {
      return false
    } else {
      this.props.colecdata(uid,++page)
    }
  }
  //删除
  del = fid => {
    localStorage.setItem('delfid',fid)
    this.setState({
      show:!this.state.show
    })
  }
  disapper = () => {
    this.setState({
      show:!this.state.show
    })
  }
  //点击确认
  appear = () => {
    this.setState({
      show:!this.state.show
    })
    const uid = localStorage.getItem('uid')
    const fid = localStorage.getItem('delfid')
    this.props.colecDeldata(uid,fid)
  }
  render() {
    const { collectionData =[] } = this.props
    const { show } = this.state
    return (
      <div className="pages-collection">
        <Header name = '收藏'/>
        <div className="pages-action">
        <InfiniteScroll
        initialLoad={false}
        loadMore={this.loadFunc}
        hasMore={true}
        useWindow={false}
        >
        <div className="collection-item">
        {
          /*
          cid: "504"
          fid: "1933"
          gid: "126829706"
          image: "//vueshop.glbuys.com/uploadfiles/1574250047.png"
          price: 4999
          title: "Apple/苹果 iPhone 8 Plus"
          */
         collectionData.length !==0 ? collectionData.map(v => {
            return (
              <dl key={v.gid}>
                <dt><img src={v.image} alt=""/></dt>
                <dd>
                  <p className="title">{v.title}</p>
                  <p className="price">￥{v.price}</p>
                  <div className="btn">
                  <p className="buy">购买</p>
                  <p className="del" onClick={() => this.del(v.fid)}>删除</p>
                  </div>
                </dd>
              </dl>
            )
          }) : <p style={{textAlign:'center',marginTop:'100px'}}>暂无相关数据!</p>
        }
        </div>
        </InfiniteScroll>
        </div>
        <div className={show? 'disappear' : 'appear'}>
          <div className="out">
            <p>确认要退出吗？</p>
            <div>
              <p onClick={this.disapper}>取消</p>
              <p style={{color:"orange"}} onClick={this.appear}>确定</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
