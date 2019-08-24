const state = {
  isModalOpen: false,
  modalName: '',
  actionName: '',
  itemId: ''
}

const getters = {
  isModalOpen: () => state.isModalOpen,
  modalName: () => state.modalName,
  actionName: () => state.actionName,
  itemId: () => state.itemId
}

const mutations = {
  closeModal() {
    state.isModalOpen = false
    state.modalName = ''
    state.actionName = ''
  },
  openModal(_, modalName) {
    state.isModalOpen = !state.isModalOpen
    state.modalName = modalName
  },
  setAction(_, actionName) {
    state.actionName = actionName
  },
  setItemId(_, itemId) {
    state.itemId = itemId
  }
}

const actions = {
  confirmDialog({ commit }, { modalName, actionName, itemId }) {
    commit('openModal', modalName)
    commit('setAction', actionName)
    commit('setItemId', itemId)
  },
  closeModal({ commit }) {
    commit('closeModal')
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
