import React from 'react';
import Swiper from 'swiper';
import { connect } from 'react-redux'
import 'swiper/js/swiper.min.js'
import 'swiper/css/swiper.min.css'
import './style.less'
export default @connect(state => {
  return {
    imgs : state.home.swiperImgs
  }
})
class index extends React.Component {
  componentDidMount() {
    new Swiper('.swiper-container', {
      autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      pagination: {
          el: '.swiper-pagination',
          clickable :true,
      },
  });

}
  render() {
    const { imgs } = this.props;
    return <div className='swip'>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {
            imgs.map((v,i)=>{
              return <div className="swiper-slide" key={i}><img src={v.image} alt="" /></div>
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>;
  }
}


