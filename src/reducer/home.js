import { 
  GET_SWIPER_IMG, 
  GET_HOME_NAVS,
  RECOMMEND_DATA,
  GET_HOME_RECOMMEND 
} from '@/constants/actionTypes'
const initialState = {
  swiperImgs: [],
  fiveNavs: [],
  recommends: [],
  recomGoods: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SWIPER_IMG:
      return { ...state, swiperImgs: payload.data }
    case GET_HOME_NAVS:
      return { ...state, fiveNavs: payload.data }
    case RECOMMEND_DATA:
      return { ...state, recommends: payload.data }
    case GET_HOME_RECOMMEND:
      return {...state, recomGoods: payload.data }
    default:
      return state
  }
}