import { FETCH_PASSWORD } from '@/constants/actionTypes'
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

  case FETCH_PASSWORD:
   if(payload.code !== 200) {
    message.info(payload.data)
    return false
  } else {
    message.info(payload.data)
    window.history.back()
  }
  return { ...state, data:payload }
  default:
    return state
  }
}