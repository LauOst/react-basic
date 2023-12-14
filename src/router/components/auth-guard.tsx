import { useRouter } from '../hooks'
import { useUserToken } from '@/store/userStore'
import { useCallback, useEffect } from 'react'

type Props = {
  children: React.ReactNode
}

export default function AuthGuard({ children }: Props) {
  const router = useRouter()
  const { accessToken } = useUserToken()

  const check = useCallback(() => {
    if (!accessToken) {
      router.replace('/login')
    }
  }, [router, accessToken])

  useEffect(() => {
    check()
  }, [check])

  return children
}
