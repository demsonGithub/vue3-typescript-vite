import Mock, { Random } from 'mockjs'
import { IMockFormat } from '../types'
import { RequestType } from '@/types/enum'

// 模拟登录数据
const loginMockData = {
  code: '200',
  msg: 'success',
  data: {
    name: '张三',
    token:
      'mockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockToken',
  },
}
// 模拟登录返回
const loginMock: IMockFormat = {
  url: '/user/login',
  requestType: RequestType.get,
  responseAction: () => {
    return loginMockData
  },
}

const registerMockData = {
  code: '200',
  msg: 'success',
  data: {
    id: '111111111111',
  },
}

const registerMock: IMockFormat = {
  url: '/user/register',
  requestType: RequestType.get,
  responseAction: () => {
    return registerMockData
  },
}

export default [loginMock, registerMock]
