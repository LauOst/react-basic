import { CSSProperties, useEffect, useState } from 'react'
import { NAV_COLLAPSED_WIDTH, NAV_WIDTH } from '@/layouts/dashboard/config.ts'
import { useThemeToken } from '@/styles/hooks'
import Color from 'color'
import Scrollbar from '@/components/scrollbar'
import { Menu, MenuProps } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import { useSettingActions, useSettings } from '@/store/settingStore.ts'
import { useLocation, useMatches, useNavigate } from 'react-router-dom'
import { ThemeLayout } from '#/enum.ts'
import { getMenuRoutes } from '@/router/utils.ts'
import { useRouteToMenu } from '@/router/hooks'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import Logo from '@/components/logo'

type Props = {
  closeSideBarDrawer?: () => void
}

export default function Nav(props: Props) {
  const navigate = useNavigate()
  const matches = useMatches()
  const { pathname } = useLocation()

  const { colorTextBase, colorBgElevated, colorBorder } = useThemeToken()

  const settings = useSettings()
  const { themeLayout } = settings
  const { setSettings } = useSettingActions()

  const menuStyle: CSSProperties = {
    background: colorBgElevated,
  }

  const routeToMenu = useRouteToMenu()

  /**
   * state
   */
  const [collapsed, setCollapsed] = useState(false)
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>([''])
  const [menuList, setMenuList] = useState<ItemType[]>([])
  const [menuMode, setMenuMode] = useState<MenuProps['mode']>('inline')

  useEffect(() => {
    if (themeLayout === ThemeLayout.Vertical) {
      const openKeys = matches.filter((match) => match.pathname !== '/').map((match) => match.pathname)
      setOpenKeys(openKeys)
    }
    setSelectedKeys([pathname])
  }, [pathname, matches, collapsed, themeLayout])

  useEffect(() => {
    const menuRoutes = getMenuRoutes()
    const menus = routeToMenu(menuRoutes)
    setMenuList(menus)
  }, [routeToMenu])

  useEffect(() => {
    if (themeLayout === ThemeLayout.Vertical) {
      setCollapsed(false)
      setMenuMode('inline')
    }
    if (themeLayout === ThemeLayout.Mini) {
      setCollapsed(true)
      setMenuMode('inline')
    }
  }, [themeLayout])

  /**
   * events
   */

  // 设置当前展开的 subMenu
  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    if (latestOpenKey) {
      setOpenKeys(keys)
    } else {
      setOpenKeys([])
    }
  }

  // 点击当前菜单跳转页面
  const onClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
    props?.closeSideBarDrawer?.()
  }

  const setThemeLayout = (themeLayout: ThemeLayout) => {
    setSettings({
      ...settings,
      themeLayout,
    })
  }

  const toggleCollapsed = () => {
    if (!collapsed) {
      setThemeLayout(ThemeLayout.Mini)
    } else {
      setThemeLayout(ThemeLayout.Vertical)
    }
    setCollapsed(!collapsed)
  }

  return (
    <div
      className='flex h-full flex-col'
      style={{
        width: collapsed ? NAV_COLLAPSED_WIDTH : NAV_WIDTH,
        borderRight: `1px dashed ${Color(colorBorder).alpha(0.6).toString()}`,
      }}>
      <div className='relative flex h-20 items-center justify-center py-4'>
        {themeLayout === ThemeLayout.Mini ? <Logo className='w-10 h-10' /> : <Logo className='w-12 h-12' />}
        <button
          onClick={toggleCollapsed}
          className='absolute right-0 top-7 z-50 hidden h-6 w-6 translate-x-1/2 cursor-pointer select-none rounded-full text-center !text-gray md:block'
          style={{ color: colorTextBase, borderColor: colorTextBase, fontSize: 16 }}>
          {collapsed ? <MenuUnfoldOutlined size={20} /> : <MenuFoldOutlined size={20} />}
        </button>
      </div>

      <Scrollbar style={{ height: 'calc(100vh - 70px)' }}>
        <Menu
          mode={menuMode}
          items={menuList}
          className='h-full !border-none'
          defaultOpenKeys={openKeys}
          defaultSelectedKeys={selectedKeys}
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          onClick={onClick}
          style={menuStyle}
          inlineCollapsed={collapsed}
        />
      </Scrollbar>
    </div>
  )
}
