import { AppRouteObject } from '#/router.ts'
import { Navigate } from 'react-router-dom'
import DashboardLayout from '@/layouts/dashboard'
import { getMenuModules } from '@/router/utils'
import AuthGuard from '@/router/components/auth-guard'

const moduleList = getMenuModules()
export const moduleRoutes: AppRouteObject = {
  path: '/',
  element: (
    <AuthGuard>
      <DashboardLayout />
    </AuthGuard>
  ),
  children: [{ index: true, element: <Navigate to='dashboard' replace /> }, ...moduleList],
}
