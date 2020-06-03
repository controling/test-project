import axios from './index'

export const getTreeData = () => {
  return axios.request({
    url: '/getTreeData',
    method: 'get'
  })
}
