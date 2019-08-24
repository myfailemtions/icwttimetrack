import { clientApi, request } from '../../utils/clientApi'
import router from '../../router'

const state = {
  loginForm: {
    email: '',
    password: ''
  },
  users: [],
  tokenError: '',
  error: false,
  loading: false,
  isAuth: false
}

const getters = {
  loginError: () => ({
    message: state.tokenError.message,
    stateError: state.error
  }),
  isAuth: () => state.isAuth,
  usersLists: () => state.users
}

const mutations = {
  updateLoginForm(_, { key, value }) {
    state.loginForm[key] = value
  },
  setToken(_, { token }) {
    localStorage.setItem('token', token)
    router.replace('/')
    state.isAuth = true
  },
  putAuth() {
    state.isAuth = true
  },
  setTokenError(_, err) {
    state.tokenError = {
      message: err.message
    }
    state.error = true
  },
  setLoading() {
    state.loading = !state.loading
  },
  hideError() {
    state.tokenError = ''
    state.error = false
  },
  setLogOut() {
    state.isAuth = false
  },
  setDevelopers(_, users) {
    state.users = users
  }
}

const actions = {
  async signOut({ commit }) {
    commit('setLogOut')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('uid')
    router.replace('/login')
  },
  async getUsersList({ commit }) {
    try {
      const users = await request(
        'get',
        'timeentry/developers'
      )
      await commit('setDevelopers', users)
    } catch (err) {
      throw err
    }
  },
  async signIn({ commit }) {
    try {
      const token = await clientApi(
        'post',
        'users/signin', {
          ...state.loginForm
        }
      )
      await commit('setToken', token)
    } catch (err) {
      await commit('setTokenError', err)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
