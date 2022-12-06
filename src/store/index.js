import { createStore } from 'vuex'

export default createStore({
  state: {
    viewSection: 'home'
  },
  getters: {
    getViewSection(state) {
      return state.viewSection;
    }
  },
  mutations: {
    setViewSection(state, payload) {
      state.viewSection = payload;
      console.log('mutation', state.viewSection)
    }
  },
  actions: {
    setViewSection(context, payload) {
      context.commit('setViewSection', payload)
      console.log('action')
    }
  },
  modules: {
  }
})
