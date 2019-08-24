import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import uix from './modules/uix'
import userProfile from './modules/userProfile'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login,
    uix,
    userProfile
  }
})

export default store
