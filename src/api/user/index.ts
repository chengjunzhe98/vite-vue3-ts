import request from '@/utils/request'

import type {
  loginFormData,
  loginResponseData,
  userInfoReponseData,
} from './type'

//项目用户相关的请求地址

enum API {
  // 登录
  LOGIN_URL = '/user/login',
  //用户信息
  USERINFO_URL = '/user/info',
}
//登录接口
export const reqLogin = (data: loginFormData) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)
//获取用户信息

export const reqUserInfo = () =>
  request.get<any, userInfoReponseData>(API.USERINFO_URL)
