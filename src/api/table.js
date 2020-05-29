import axios from './index'

export const getTableList = (params) => {
  return axios.request({
    url: '/getTableList',
    method: 'get',
    params
  })
}

export const addTableItem = (data) => {
  return axios.request({
    url: '/addTableItem',
    method: 'post',
    data
  })
}

export const editTableItem = (data) => {
  return axios.request({
    url: '/editTableItem',
    method: 'post',
    data
  })
}

export const deleteTableItem = (id) => {
  return axios.request({
    url: '/deleteTableItem?id=' + id,
    method: 'get'
  })
}

