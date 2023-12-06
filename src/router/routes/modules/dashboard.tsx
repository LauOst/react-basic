import { AppRouteObject } from '#/router'
import { Suspense, lazy } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { SvgIcon } from '@/components/icon'
import { CircleLoading } from '@/components/loading'

const HomePage = lazy(() => import(`@/views/dashboard/workbench`))
const Analysis = lazy(() => import('@/views/dashboard/analysis'))

const dashboard: AppRouteObject = {
  order: 1,
  path: 'dashboard',
  element: (
    <Suspense fallback={<CircleLoading />}>
      <Outlet />
    </Suspense>
  ),
  meta: {
    label: 'sys.menu.dashboard',
    icon: <SvgIcon icon='ic-analysis' className='ant-menu-item-icon' size='24' />,
    key: '/dashboard',
  },
  children: [
    {
      index: true,
      element: <Navigate to='workbench' replace />,
    },
    {
      path: 'workbench',
      element: <HomePage />,
      meta: { label: 'sys.menu.workbench', key: '/dashboard/workbench' },
    },
    {
      path: 'analysis',
      element: <Analysis />,
      meta: { label: 'sys.menu.analysis', key: '/dashboard/analysis' },
    },
  ],
}
export default dashboard
