import Mock from 'mockjs'
import { getUserInfo, login, authorization } from './response/user'
import { getTableData, getFileList, getFolderList } from './response/data'

Mock.mock(/\/getUserInfo/, 'post', getUserInfo)
Mock.mock(/\/login/, 'post', login)
Mock.mock(/\/authorization/, 'get', authorization)
Mock.mock(/\/getTableData/, 'get', getTableData)
Mock.mock(/\/getFileList/, 'get', getFileList)
Mock.mock(/\/getFolderList/, 'get', getFolderList)

Mock.setup({
  timeout: 0
})

export default Mock
