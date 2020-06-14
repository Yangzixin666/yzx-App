import { FETCH_USERINFO } from '@/constants/actionTypes'
import api from '@/services/api'
import { get } from '@/utils/request'

export const userinfo = (payload) => ({
  type: FETCH_USERINFO,
  payload: get(`/aps${api.userinfo}`)
})
