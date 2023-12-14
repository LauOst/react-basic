import { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { worker } from './_mock'
// icon
import 'virtual:svg-icons-register'

// i18n
import './locales/i18n'

// tailwind css
import './styles/index.css'

// 创建一个 client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3, // 失败重试次数
      staleTime: 10_1000, // 数据变得 "陈旧"（stale）的时间 10s
      refetchOnWindowFocus: false, // 禁止窗口聚焦时重新获取数据
      refetchOnReconnect: false, // 禁止重新连接时重新获取数据
      refetchOnMount: false, // 禁止组件挂载时重新获取数据
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    <Suspense>
      <App />
    </Suspense>
  </QueryClientProvider>,
)

worker.start({ onUnhandledRequest: 'bypass' })
