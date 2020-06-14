import { FETCH_GOODS_LEFT,FETCH_GOODS_RIGHT } from '@/constants/actionTypes'
const initialState = {
  leftdata:[],
  rightdata:[],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case FETCH_GOODS_LEFT:
    return { ...state, leftdata:payload.data }
  case FETCH_GOODS_RIGHT:
    return { ...state, rightdata:payload.data }
  default:
    return state
  }
}
