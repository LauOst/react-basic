import { Navigate } from 'react-router-dom'

import { authRoutes } from './auth'
import { moduleRoutes } from './module'

export const routes = [
  authRoutes,
  moduleRoutes,
  // No match 404
  { path: '*', element: <Navigate to='/404' replace /> },
]
