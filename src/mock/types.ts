import { RequestType } from '@/types/enum'

export interface IMockFormat {
  url: string
  requestType: RequestType
  responseAction: any
}
