import api from "@/services/api"
import { get } from "../utils/request"
import { FETCH_MINE_COLLECTION, FETCH_MINE_DELETE } from '@/constants/actionTypes'

export function colecdata (uid,pages) {
  return {
    type:FETCH_MINE_COLLECTION,
    payload:get(`/aps${api.colection}&uid=`+uid+`&page=`+pages)
  }
}
export function colecDeldata (uid,fid) {
  return {
    type:FETCH_MINE_DELETE,
    payload:get(`/aps${api.userdel}&uid=`+uid+`&fid=`+fid)
  }
}