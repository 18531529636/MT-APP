import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  position: '北京',
  serchWord: ''
}

const mutations = {
  setPosition (state, val) {
    state.position = val
  },
  sendWord (state, val) {
    state.searchWord = val
  }
}

const actions = {
  setPosition ({ commit }, val) {
    // 异步请求后端，获取当前位置数据
    commit('setPosition', val)
  },
  sendSearchWord ({ commit }, val) {
    commit('sendWord', val)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
