import { CSSProperties, useState } from 'react'
import Color from 'color'

import { IconButton, SvgIcon } from '@/components/icon'
import { useResponsive, useThemeToken } from '@/styles/hooks'
import { useSettings } from '@/store/settingStore.ts'
import { ThemeLayout } from '#/enum.ts'
import { NAV_COLLAPSED_WIDTH, NAV_WIDTH } from './config'
import BreadCrumb from '../_common/bread-crumb'
import { Drawer } from 'antd'
import Nav from './nav'
import SettingButton from '@/layouts/_common/setting-button.tsx'
import LocalePicker from '@/components/locale-pocker'

type Props = {
  className?: string
  offsetTop?: boolean
}

export default function Header({ className = '', offsetTop = false }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { themeLayout } = useSettings()
  const { colorBgElevated, colorBgLayout } = useThemeToken()
  const { screenMap } = useResponsive()

  const headerStyle: CSSProperties = {
    position: 'fixed',
    backgroundColor: Color(colorBgElevated).alpha(0.8).toString(),
  }

  if (screenMap.md) {
    headerStyle.right = '0px'
    headerStyle.left = 'auto'
    headerStyle.width = `calc(100% - ${themeLayout === ThemeLayout.Vertical ? NAV_WIDTH : NAV_COLLAPSED_WIDTH}`
  } else {
    headerStyle.width = '100vw'
  }

  return (
    <>
      <header className={`z-20 w-full ${className}`} style={headerStyle}>
        <div
          className='shadow-2 flex flex-grow items-center justify-between px-4 text-gray backdrop-blur xl:px-6 2xl:px-10'
          style={{
            height: offsetTop ? '64px' : '80px',
            transition: 'height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          }}>
          <div className='flex items-baseline'>
            <IconButton onClick={() => setDrawerOpen(true)} className='h-10 w-10 md:hidden'>
              <SvgIcon icon='ic-menu' size='24' />
            </IconButton>
            {/*<div className='hidden md:block pr-5'>*/}
            {/*  <button*/}
            {/*    className='right-0 top-7 z-50 hidden h-6 w-6 translate-x-1/2 cursor-pointer select-none rounded-full text-center !text-gray md:block'*/}
            {/*    style={{ color: colorTextBase, borderColor: colorTextBase, fontSize: 16 }}>*/}
            {/*    {collapsed ? <MenuUnfoldOutlined size={20} /> : <MenuFoldOutlined size={20} />}*/}
            {/*  </button>*/}
            {/*</div>*/}
            <div className='hidden md:block'>{<BreadCrumb />}</div>
          </div>
          <div className='flex'>
            <LocalePicker />
            <SettingButton />
          </div>
        </div>
      </header>
      <Drawer
        placement='left'
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        closeIcon={false}
        styles={{ header: { display: 'none' }, body: { padding: 0, overflow: 'hidden', background: colorBgLayout } }}
        width='auto'>
        <Nav closeSideBarDrawer={() => setDrawerOpen(false)} />
      </Drawer>
    </>
  )
}
