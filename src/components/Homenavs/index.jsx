import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getNavs } from '@/actions/home'
import './style.less'
export default @connect(state => {
  return {
    navs : state.home.fiveNavs
  }
}, {
  getNavs
})
class index extends React.Component {
  componentDidMount() {
    this.props.getNavs()
  }
  render() {
    const { navs } = this.props;
    return <div className='home_navs'>
      {
        navs.map(v => {
          return (
           <Link  to={`/goods/detail/${v.cid}`} key={v.cid}>
            <dl>
              <dt><img src={v.image} alt='' /></dt>
              <dd>{v.title}</dd>
            </dl>
          </Link>
          )
        })
     }
    </div>;
  }
}


