import axios, {
  AxiosInstance,
  AxiosRequestConfig
} from 'axios'
import { ApiResult } from '@/models/common'

const configuration: AxiosRequestConfig = {
  responseType: 'json'
}

class Api {
  private axios: AxiosInstance;

  constructor () {
     this.axios = axios.create(configuration)
  }

  public async get<T> (url: string, params?: object): Promise<ApiResult<T>> {
     return this.axios.get(url, { params })
  }
}

export default new Api()