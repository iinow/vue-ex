const login = {
  namepace: 'LOGIN',
  state: {
    text: 'h'
  },
  mutations: {
    setText (state, value) {
      state.text = value
    }
  }
}

module.exports = login
