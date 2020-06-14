import api from "@/services/api"
import { post } from "../utils/request"
import { FETCH_CART_LOGIN, FETCH_OUT } from '@/constants/actionTypes'
export function loginInfo (options) {
  return {
    type:FETCH_CART_LOGIN,
    payload:post(`/aps${api.login}`,options)
  }
}
export const outinfo = (payload) => ({
  type: FETCH_OUT,
  payload: post(`/aps${api.out}`,payload)
})
