export default store => {
  console.log('store初始化了')
  // 当本地存储有state时,替换store中的state
  if (localStorage.state) {
    store.replaceState(JSON.parse(localStorage.state))
  }
  // 每次执行mutations后都会执行下面的回调函数
  // 第一个参数为本次提交的mutations的信息
  store.subscribe((mutation, state) => {
    localStorage.state = JSON.stringify(state)
  })
}
