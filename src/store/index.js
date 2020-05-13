import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Expands: {
      Menu: false
    },
    Loading: false,
  },
  mutations: {
    // update expand sections
    UpdExpand(state, data) {
      state.Expands[data.cat] = data.value;
    },
  },
  actions: {
  },
  modules: {
  }
})
