import { RouterProvider } from 'react-router-dom'

import router from '@/router'
import AntdConfig from '@/styles/antd'

function App() {
  return (
    <AntdConfig>
      <RouterProvider router={router} />
    </AntdConfig>
  )
}

export default App
