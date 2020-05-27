// 为state新增属性时需要用到vue.set方法
import vue from 'vue'

const mutations = {
  SET_APP_NAME (state, params) {
    // 第一个参数为同级的state, 第二个参数为commit这个函数传过来的值
    state.appName = params
  },
  SET_APP_VERSION (state) {
    // 第一个参数为同级state, 第二参数为新增的属性名, 第三个为属性值
    vue.set(state, 'appVersion', 'v1.0')
  },
  SET_STATE_VALUE (state, value) {
    state.stateValue = value
  }
}
export default mutations
