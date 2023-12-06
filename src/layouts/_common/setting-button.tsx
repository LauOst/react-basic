import { IconButton, SvgIcon } from '@/components/icon'
import { m } from 'framer-motion'
import { varHover } from '@/components/animate/variants/action'
import { CSSProperties, useState } from 'react'
import { Drawer, Card } from 'antd'
import { useThemeToken } from '@/styles/hooks'
import { useSettingActions, useSettings } from '@/store/settingStore.ts'
import { ThemeMode } from '#/enum.ts'
import Color from 'color'
import CyanBlur from '@/assets/images/background/cyan-blur.png'
import RedBlur from '@/assets/images/background/red-blur.png'

export default function SettingButton() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { colorPrimary, colorTextSecondary, colorBgContainer } = useThemeToken()

  const settings = useSettings()
  const { themeMode } = settings
  const { setSettings } = useSettingActions()

  const setThemeMode = (themeMode: ThemeMode) => {
    setSettings({
      ...settings,
      themeMode,
    })
  }

  const style: CSSProperties = {
    backdropFilter: 'blur(20px)',
    backgroundImage: `url("${CyanBlur}"), url("${RedBlur}")`,
    backgroundRepeat: 'no-repeat, no-repeat',
    backgroundColor: Color(colorBgContainer).alpha(0.9).toString(),
    backgroundPosition: 'right top, left bottom',
    backgroundSize: '50, 50%',
  }
  const bodyStyle: CSSProperties = {
    padding: 0,
  }

  return (
    <>
      <div className='flex items-center justify-center'>
        <m.div
          animate={{
            rotate: [0, drawerOpen ? 0 : 360],
          }}
          transition={{
            duration: 12,
            ease: 'linear',
            repeat: Infinity,
          }}
          whileTap='tap'
          whileHover='hover'
          variants={varHover(1.05)}
          onClick={() => setDrawerOpen(true)}>
          <IconButton>
            <SvgIcon icon='ic-setting' size='24' />
          </IconButton>
        </m.div>
      </div>
      <Drawer
        title='Settings'
        placement='right'
        width={280}
        styles={{ body: bodyStyle }}
        closable={false}
        maskStyle={{ backgroundColor: 'transparent' }}
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        style={style}>
        <div className='flex flex-col gap-6 p-6'>
          {/* theme mode */}
          <div>
            <div className='mb-3 text-base font-semibold' style={{ color: colorTextSecondary }}>
              Mode
            </div>
            <div className='flex flex-row gap-4'>
              <Card
                className='flex h-20 w-full cursor-pointer item-center justify-center'
                onClick={() => setThemeMode(ThemeMode.Light)}>
                <SvgIcon
                  icon='ic-settings-mode-sun'
                  size='24'
                  color={themeMode === ThemeMode.Light ? colorPrimary : ''}
                />
              </Card>
              <Card
                className='flex h-20 w-full cursor-pointer items-center justify-center'
                onClick={() => setThemeMode(ThemeMode.Dark)}>
                <SvgIcon
                  icon='ic-settings-mode-moon'
                  size='24'
                  color={themeMode === ThemeMode.Dark ? colorPrimary : ''}
                />
              </Card>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  )
}
