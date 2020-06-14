import api from "@/services/api"
import { post } from "../utils/request"
import { FETCH_PASSWORD } from '@/constants/actionTypes'

export function changePassword (options) {
  return {
    type:FETCH_PASSWORD,
    payload:post(`/aps${api.changePassword}`,options)
  }
}