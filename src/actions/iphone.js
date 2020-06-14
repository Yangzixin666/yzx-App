import api from "@/services/api"
import { post } from "../utils/request"
import { FETCH_IPHONE } from '@/constants/actionTypes'

export function iphone (options) {
  return {
    type:FETCH_IPHONE,
    payload:post(`/aps${api.iphone}`,options)
  }
}