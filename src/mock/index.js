import Mock from 'mockjs'
import { getTableList, addTableItem, editTableItem, deleteTableItem } from './response/table'

Mock.mock(/\/getTableList/, 'get', getTableList)
Mock.mock(/\/addTableItem/, 'post', addTableItem)
Mock.mock(/\/editTableItem/, 'post', editTableItem)
Mock.mock(/\/deleteTableItem/, 'get', deleteTableItem)

Mock.setup({
  timeout: 1000
})

export default Mock
