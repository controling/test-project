import Mock from 'mockjs'
import { doCustomTimes, parseQueryString } from '@/utils/index'

const Random = Mock.Random

const tableData = []

const template = {
  'id|+1': 1,
  'order|+1': 1,
  'file_id|+1': 1,
  file_name: () => Random.ctitle() + '目录',
  'sort|+1': 1,
  create_name: () => Random.cname(),
  create_time: () => Random.datetime('yyyy-MM-dd hh:mm')
}

// 获取table数据
export const getTableList = (options) => {
  // 页码参数
  const params = parseQueryString(options.url)
  const currentPage = Number(params.currentPage)
  const pageSize = Number(params.pageSize)

  // 创建多条数据
  if (tableData.length === 0) {
    doCustomTimes(90, () => {
      tableData.push(Mock.mock(template))
    })
  }
  // 根据tree数据/页码参数/筛选条件获取数据
  let dataSource = tableData
  if (params.treeFilterData && params.treeFilterData !== '0') {
    const treeFilterData = params.treeFilterData.split('-')[0]
    dataSource = dataSource.filter(data => data.sort % treeFilterData === 0)
  }
  const fileName = params.fileName && decodeURI(params.fileName)
  if (fileName) {
    dataSource = dataSource.filter(data => data.file_name.indexOf(fileName) > -1)
  }
  const createName = params.createName && decodeURI(params.createName)

  if (createName) {
    dataSource = dataSource.filter(data => data.create_name.indexOf(createName) > -1)
  }
  const start = (currentPage - 1) * pageSize
  const end = start + pageSize
  const filterTableData = dataSource.slice(start, end)

  const res = {
    code: 200,
    pageInfo: {
      currentPage,
      total: dataSource.length
    },
    data: filterTableData
  }
  return res
}

function formatNum(num) {
  return num < 10 ? '0' + num : num
}

// 获取当前时间
function getDate() {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDate()
  const hour = now.getHours()
  const min = now.getMinutes()
  return year + '-' + formatNum(month) + '-' + formatNum(day) + ' ' + formatNum(hour) + ':' + formatNum(min)
}

// 新增列表数据
export const addTableItem = (options) => {
  const data = JSON.parse(options.body)
  const obj = {
    ...data,
    id: tableData.length + 1,
    create_time: getDate()
  }
  tableData.unshift(obj)
  const res = {
    code: 200
  }
  return res
}

// 编辑列表数据
export const editTableItem = (options) => {
  const data = JSON.parse(options.body)
  const filterData = tableData.filter(item => item.id === data.id)
  Object.assign(filterData[0], data)
  tableData.concat(filterData)
  const res = {
    code: 200
  }
  return res
}

// 删除列表数据
export const deleteTableItem = (options) => {
  const params = parseQueryString(options.url)
  const id = Number(params.id)
  for (let i = 0; i < tableData.length; i++) {
    if (tableData[i].id === id) {
      tableData.splice(i, 1)
    }
  }
  const res = {
    code: 200
  }
  return res
}
