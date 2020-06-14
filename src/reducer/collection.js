import { FETCH_MINE_COLLECTION, FETCH_MINE_DELETE} from '@/constants/actionTypes'
const initialState = {
  collectionData:[],
  pagenum:0,
  page:0
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case FETCH_MINE_COLLECTION:
    let { collectionData, pagenum,page } = state;
    let data=[]
    let pagenums = ""
    let pages = ""
    if ( parseInt(payload.code) !== 200 ) {
      data=[]
      pagenums = pagenum
      pages = page
    } else {
      data = payload.data
      pagenums = payload.pageinfo.itemTotal
      pages = payload.pageinfo.page
    }
    return { 
      ...state, 
      collectionData:[...collectionData,...data],
      pagenum:pagenums,
      page:pages
     }
  case FETCH_MINE_DELETE:
    if( parseInt(payload.code) !== 200 ) {
       return false
    }
    let { collectionData:collectionDatas } = state;
    const fid = localStorage.getItem('delfid')
    collectionDatas = collectionDatas.filter(v => parseInt(v.fid) !== parseInt(fid))
   return { ...state,collectionData:collectionDatas}
  default:
    return state
  }
}
