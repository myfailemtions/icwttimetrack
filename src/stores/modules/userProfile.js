import { request } from '../../utils/clientApi'

const state = {
  userTasks: [],
  currentProfile: {},
  taskForm: {}
}

const getters = {
  usersTasks: () => state.userTasks,
  currentProfile: () => state.currentProfile
}

const mutations = {
  setUsersTasks(_, tasks) {
    state.userTasks = tasks
  },
  setCurrentUser(_, currentProfile) {
    state.currentProfile = currentProfile
  },
  updateTaskForm(_, { value, name }) {
    state.taskForm[name] = value
  },
  setTask(_, task) {
    state.taskForm = task
  }
}

const actions = {
  async getTasksList({ commit, rootState }, _id) {
    const { users } = rootState.login
    const currentUser = users.find(user => user._id === _id)
    try {
      const tasks = await request(
        'get',
        `timeentry/${_id}`
      )
      await commit('setCurrentUser', currentUser)
      await commit('setUsersTasks', tasks)
    } catch (err) {
      throw err
    }
  },
  async getTask({ commit }, id) {
    try {
      const task = await request('get', `timeentry/${id}`)
      console.log(task)
      commit('setTask', task)
    } catch (err) {
      throw err 
    }
  },
  async sortByDate({ commit }, { endDate, startDate, userId }) {
    try {
      const tasks = await request(
        'get',
        `timeentry/sort?endDate=${endDate}&startDate=${startDate}&userId=${userId}&isDateFilter=true`
      )
      await commit('setUsersTasks', tasks)
    } catch (err) {
      throw err
    }
  },
  async removeTask({ dispatch, commit }, id) {
    const { _id } = state.currentProfile
    try {
      await request(
        'delete',
        `timeentry/${id}`
      )
      dispatch('getTasksList', _id)
      commit('closeModal', { root: true })
    } catch (err) {
      throw err
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
