import { useThemeToken } from '@/styles/hooks'
import { Suspense } from 'react'
import { CircleLoading } from '@/components/loading'
import Main from '@/layouts/dashboard/main'
import Nav from '@/layouts/dashboard/nav'
import Header from '@/layouts/dashboard/header'

const DashboardLayout = () => {
  const { colorBgElevated, colorTextBase, colorBgLayout } = useThemeToken()
  const verticalLayout = (
    <>
      <Header />
      <div className='z-50 hidden h-full flex-shrink-0 md:block' style={{ background: colorBgLayout }}>
        <Nav />
      </div>
      <Main />
    </>
  )
  return (
    <>
      <div
        className='flex h-screen overflow-hidden'
        style={{
          color: colorTextBase,
          background: colorBgElevated,
        }}>
        <Suspense fallback={<CircleLoading />}>{verticalLayout}</Suspense>
      </div>
    </>
  )
}

export default DashboardLayout
