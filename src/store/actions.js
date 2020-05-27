import { getAppName } from '@/api/app'

const actions = {
  updateAppName ({ commit }, params) {
    console.log(params)
    // params是通过dispatch方法传过来的参数
    // commit('SET_APP_NAME', params)
    // 调用commit方法提交mutations中的方法
    getAppName().then(res => {
      const { info: { appName } } = res // es6解构赋值
      commit('SET_APP_NAME', appName) // SET_APP_NAME是mutations中定义的方法
      // commit('SET_APP_NAME', res.info.appName)
    }).catch(err => {
      console.log(err)
    })
  }
  // 通过async/await处理异步
  // async updateAppName ({commit}) {
  // 	try {
  // 		const {info: {appName}} = await getAppName()
  // 		commit('SET_APP_NAME', appName)
  // 	} catch (error) {
  // 		console.log(error)
  // 	}
  // }
}

export default actions
