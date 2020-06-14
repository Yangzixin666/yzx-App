import { FETCH_USERINFO } from '@/constants/actionTypes'
const initialState = {
  data:false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case FETCH_USERINFO:
    return { ...state, data:payload.data }
  default:
    return state
  }
}
