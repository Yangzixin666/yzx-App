import api from "@/services/api"
import { post } from "../utils/request"
import { FETCH_REG } from '@/constants/actionTypes'
export function toReg (payload) {
  return {
    type:FETCH_REG,
    payload:post(`/aps${api.reg}`,payload)
  }
}
