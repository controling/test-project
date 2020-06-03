import Mock from 'mockjs'
import { getTableList, addTableItem, editTableItem, deleteTableItem } from './response/table'
import { getTreeData } from './response/organize'

// table
Mock.mock(/\/getTableList/, 'get', getTableList)
Mock.mock(/\/addTableItem/, 'post', addTableItem)
Mock.mock(/\/editTableItem/, 'post', editTableItem)
Mock.mock(/\/deleteTableItem/, 'get', deleteTableItem)

// tree
Mock.mock(/\/getTreeData/, 'get', getTreeData)

Mock.setup({
  timeout: 1000
})

export default Mock
