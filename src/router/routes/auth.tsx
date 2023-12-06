import { lazy } from 'react'
import { AppRouteObject } from '#/router'

const Login = lazy(() => import('@/views/login/login'))

export const authRoutes: AppRouteObject = { path: '/login', element: <Login /> }
