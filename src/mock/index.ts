import Mock from 'mockjs'
import { IMockFormat } from './types'

import user from './modules/user'

const mockArray: IMockFormat[] = [...user]

Mock.setup({
  timeout: '200-600',
})

const initMock = () => {
  mockArray.forEach(item => {
    // RegExp正则这一步很重要，要不然404
    Mock.mock(new RegExp(item.url), item.requestType, item.responseAction)
  })
}

export default initMock
