import apiClient from '../apiClient.ts'
import { UserInfo, UserToken } from '#/entity.ts'

export interface SignInReq {
  username: string
  password: string
}

export type SignInRes = UserToken & { user: UserInfo }

export enum UserApi {
  SignIn = '/auth/signin',
}

const signin = (data: SignInReq) => apiClient.post<SignInRes>({ url: UserApi.SignIn, data })

export default {
  signin,
}
