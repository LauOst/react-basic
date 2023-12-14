import { PropsWithChildren, createContext, useState, useMemo } from 'react'

export enum LoginStateEnum {
  LOGIN,
  REGISTER,
  RESET_PASSWORD,
  MOBILE,
  QR_CODE,
}

interface LoginStateContextType {
  loginState: LoginStateEnum
  setLoginState: (loginState: LoginStateEnum) => void
  backToLogin: () => void
}

const LoginStateContext = createContext<LoginStateContextType>({
  loginState: LoginStateEnum.LOGIN,
  setLoginState: () => {},
  backToLogin: () => {},
})

export const LoginStateProvider = ({ children }: PropsWithChildren) => {
  const [loginState, setLoginState] = useState(LoginStateEnum.LOGIN)

  const value: LoginStateContextType = useMemo(
    () => ({ loginState, setLoginState, backToLogin: () => setLoginState(LoginStateEnum.LOGIN) }),
    [loginState],
  )

  return <LoginStateContext.Provider value={value}>{children}</LoginStateContext.Provider>
}
