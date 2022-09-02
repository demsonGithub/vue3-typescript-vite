import * as IService from './types'
import { request } from '../request'

const loginApi: IService.ILoginApi = {
  login: function (params: IService.ILoginParams): Promise<any> {
    return request({
      method: 'get',
      url: '/user/login',
      params,
    })
  },
  register: function (): Promise<any> {
    throw new Error('Function not implemented.')
  },
}

export default loginApi
