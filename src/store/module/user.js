// 导入 登录接口
import { login, authorization } from '@/api/user'
import { setToken } from '@/lib/util'

const state = {
  userName: 'control'
}
const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}
const mutations = {
  SET_USER_NAME (state, params) {
    state.userName = params
  }
}
const actions = {
  updateUserName ({ commit, state, rootState, dispatch }) {
    // 在模块中actions第二个参数为本模块的state, 第三个参数为根state, 第四个参数可以调用本模块中的其他actions方法
  },
  login ({ commit }, { userName, password }) {
    return new Promise((resolve, reject) => {
      login({ userName, password }).then((res) => {
        if (res.code === 200 && res.data.token) {
          setToken(res.data.token)
          resolve()
        } else {
          reject(new Error('error'))
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  authorization () {
    return new Promise((resolve, reject) => {
      authorization().then((res) => {
        if (res.code === 401) {
          reject(new Error('token error'))
        } else {
          setToken(res.data.token)
          resolve()
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  logout () {
    setToken('')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
