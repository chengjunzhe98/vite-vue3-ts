// 登录表单数据
export interface loginFormData {
  username: string
  password: string
}

interface loginData {
  token: string
}
// 登录接口返回数据
export interface loginResponseData {
  code: number
  data: loginData
}

interface userInfoData {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}
// 用户信息数据
export interface userInfoReponseData {
  code: number
  data: userInfoData
}
