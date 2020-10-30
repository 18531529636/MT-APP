import axios from '@/axios.js'

let api = {
  searchHotWord (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  searchList (params) {
    return axios.get('/api/meituan/header/search.json', params)
  },
  menulist (params) {
    return axios.get('/api/meituan/index/nav.json', params)
  },
  movielist (params) {
    return axios.get('/api/meituan/index/resultsByKeywords.json', params)
  },
  listitem (params) {
    return axios.get('/api/meituan/list/goodsList.json', params)
  }
}

export default api
