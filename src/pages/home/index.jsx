import React from 'react'
import { connect } from 'react-redux'
import Homehead from '@@/Homehead'
import Swip from '@@/Swip'
import Homenavs from '@@/Homenavs'
import Recommend from '@@/Recommend'
import Threegoods from '@@/Threegoods'
import { getSwiper, getNavs, getRecommend } from '@/actions/home'
import './styles.less'


export default @connect(state => {
  return {}
}, {
    getSwiper,
    getNavs,
    getRecommend
})
class Home extends React.Component {
  componentDidMount() {
    this.props.getSwiper()
    this.props.getNavs()
    this.props.getRecommend()
  }
  render () {
    return (
      <div className="pages-home">
        <Homehead />
        <Swip />
        <Homenavs />
        <Threegoods />
        <Recommend />
      </div>
    )
  }
}
