import { Layout, Typography } from 'antd'
import Color from 'color'

import Overlay2 from '@/assets/images/background/overlay_2.jpg'
import { useThemeToken } from '@/styles/hooks'
import { LoginStateProvider } from './providers/LoginStateProvider'
import LoginForm from './LoginForm'

const Login = () => {
  const { colorBgElevated } = useThemeToken()

  const gradientBg = Color(colorBgElevated).alpha(0.9).toString()

  const bg = `linear-gradient(${gradientBg}, ${gradientBg}) center center / cover no-repeat,url(${Overlay2})`

  return (
    <Layout className='relative flex !min-h-screen !w-full !flex-row '>
      <div
        className='grow flex-col items-center justify-center md:flex'
        style={{
          background: bg,
        }}>
        <div className='text-3xl font-bold leading-normal lg:text-4xl xl:text-5xl'>Admin</div>
        <Typography.Text className='flex flex-row gap-[16px] text-2xl'>Liu Admin</Typography.Text>
      </div>
      <div className='flex !h-screen w-full max-w-[480px] flex-col justify-center px-[16px] lg:px-[64px]'>
        <LoginStateProvider>
          <LoginForm />
        </LoginStateProvider>
      </div>
    </Layout>
  )
}

export default Login
