import { Suspense, lazy } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { Iconify } from '@/components/icon'
import { CircleLoading } from '@/components/loading'

import { AppRouteObject } from '#/router'

const AnimatePage = lazy(() => import('@/views/components/animate'))
const ScrollPage = lazy(() => import('@/views/components/scroll'))
const ChartPage = lazy(() => import('@/views/components/chart'))

const components: AppRouteObject = {
  order: 2,
  path: 'components',
  element: (
    <Suspense fallback={<CircleLoading />}>
      <Outlet />
    </Suspense>
  ),
  meta: {
    label: 'sys.menu.components',
    icon: <Iconify icon='solar:widget-5-bold-duotone' className='ant-menu-item-icon' size='24' />,
    key: '/components',
  },
  children: [
    {
      index: true,
      element: <Navigate to='icon' replace />,
    },
    {
      path: 'animate',
      element: <AnimatePage />,
      meta: { label: 'sys.menu.animate', key: '/components/animate' },
    },
    {
      path: 'scroll',
      element: <ScrollPage />,
      meta: { label: 'sys.menu.scroll', key: '/components/scroll' },
    },
    {
      path: 'chart',
      element: <ChartPage />,
      meta: { label: 'sys.menu.chart', key: '/components/chart' },
    },
  ],
}

export default components
