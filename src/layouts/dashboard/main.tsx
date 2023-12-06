import { Content } from 'antd/es/layout/layout'
import { Outlet } from 'react-router-dom'
import { NAV_WIDTH } from './config'

const Main = () => {
  return (
    <Content style={{ width: `calc(100% - ${NAV_WIDTH}` }} className={`flex overflow-auto p-2 pt-20`}>
      <div className={`m-auto h-full w-full flex-grow sm:px-2`}>
        <Outlet />
      </div>
    </Content>
  )
}

export default Main
