import { create } from 'zustand'
import { UserToken } from '#/entity'
import { getItem, setItem } from '@/utils/storage'
import { StorageEnum } from '#/enum'
import userService, { SignInReq } from '@/api/services/userService.ts'
import { useMutation } from '@tanstack/react-query'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { message, notification } from 'antd'

type UserStore = {
  userToken: UserToken
  actions: {
    setUserToken: (token: UserToken) => void
  }
}

const useUserStore = create<UserStore>((set) => ({
  userToken: getItem<UserToken>(StorageEnum.Token) || {},

  actions: {
    setUserToken: (userToken) => {
      set({ userToken })
      setItem(StorageEnum.Token, userToken)
    },
  },
}))

export const useUserToken = () => useUserStore((state) => state.userToken)

export const useUserActions = () => useUserStore((state) => state.actions)

export const useSignIn = () => {
  const navigatge = useNavigate()

  const { setUserToken } = useUserActions()

  const signInMutation = useMutation({ mutationFn: userService.signin })
  const signIn = async (data: SignInReq) => {
    try {
      const res = await signInMutation.mutateAsync(data)
      const { accessToken, refreshToken } = res
      setUserToken({ accessToken, refreshToken })

      navigatge('/dashboard', { replace: true })

      notification.success({
        message: '登录成功',
        description: '欢迎回来',
        duration: 3,
      })
    } catch (error: any) {
      message.warning({
        content: error.message,
        duration: 3,
      })
      console.log(error)
    }
  }
  return useCallback(signIn, [])
}
