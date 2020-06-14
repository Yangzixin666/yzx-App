import api from "@/services/api"
import { post } from "../utils/request"
import { FETCH_UNDATE_USER } from '@/constants/actionTypes'

export function updateUser (options) {
  return {
    type:FETCH_UNDATE_USER,
    payload:post(`/aps${api.updateInfo}`,options)
  }
}