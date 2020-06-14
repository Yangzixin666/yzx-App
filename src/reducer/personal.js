import { FETCH_UNDATE_USER } from '@/constants/actionTypes'
import { message } from 'antd'
const initialState = {
  data:false
}
message.config({
  top: 200,
  duration: 1,
  maxCount: 1,
});
export default (state = initialState, { type, payload }) => {
  switch (type) {

  case FETCH_UNDATE_USER:
    message.info(payload.data)
   if(parseInt(payload.code) !== 200) {
    return false
  } else {
    window.history.back()
  }
  return { ...state, data:payload }
  default:
    return state
  }
}