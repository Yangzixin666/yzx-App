import { FETCH_CART_LOGIN, FETCH_OUT } from '@/constants/actionTypes'
import { message } from 'antd'
message.config({
    top: 150,
    duration: 1,
    maxCount: 1,
});
const initialState = {
    data: false
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_CART_LOGIN:
			if (payload.code !== 200) {
					message.info(payload.data)
					return false
			} else {
					window.history.back()//路由后退一步
			}
			localStorage.setItem("uid",payload.data.uid)
			return {...state, data: payload.data }
		case FETCH_OUT: 
		if ( payload.code === 200 ) {
			window.location.href="/login"
		}
		return {...state, data: false }
		default:
			return state
	}
}