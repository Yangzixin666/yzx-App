import api from "@/services/api"
import { post } from "../utils/request"
import { FETCH_GOODS_LEFT, FETCH_GOODS_RIGHT, } from '@/constants/actionTypes'
export function goodsLeft (options) {
  return {
    type:FETCH_GOODS_LEFT,
    payload:post(`/aps${api.goodsLeft}`)
  }
}
export function goodsRight (options) {
  return {
    type:FETCH_GOODS_RIGHT,
    payload:post(`/aps${api.goodsRight}&cid=`+options)
  }
}