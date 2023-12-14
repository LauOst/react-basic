import { ThemeConfig } from 'antd'

import { ThemeColorPresets } from '#/enum'
/**
 * Antd theme editor: https://ant.design/theme-editor-cn
 */
const customThemeTokenConfig: ThemeConfig['token'] = {
  colorSuccess: '#22c55e',
  colorWarning: '#ff7849',
  colorError: '#ff5630',
  colorInfo: '#00b8d9',

  // 线性化
  wireframe: false,

  borderRadiusSM: 2,
  borderRadius: 4,
  borderRadiusLG: 8,
}

const customComponentConfig: ThemeConfig['components'] = {
  Breadcrumb: {
    fontSize: 12,
    separatorMargin: 4,
  },
  Menu: {
    fontSize: 14,
    colorFillAlter: 'transparent',
    itemColor: 'rgba(255,255,255,.81)',
    // itemHoverBg: 'rgba(255,255,255,.81)', // 菜单项悬浮态背景色
  },
}

const colorPrimarys: {
  [k in ThemeColorPresets]: string
} = {
  default: '#00a76f',
  cyan: '#078DEE',
  purple: '#7635DC',
  blue: '#2065D1',
  orange: '#FDA92D',
  red: '#FF3030',
}

const themeModeToken: Record<'dark' | 'light', ThemeConfig> = {
  dark: {
    token: {
      colorBgLayout: '#161c24',
      colorBgContainer: '#212b36',
      colorBgElevated: '#161c24',
    },
    components: {
      Modal: {
        headerBg: '#212b36',
        contentBg: '#212b36',
        footerBg: '#212b36',
      },
      Notification: {},
    },
  },
  light: {
    token: {
      colorBgLayout: '#343a40',
    },
    components: {
      Menu: {
        fontSize: 14,
        colorFillAlter: 'transparent',
        itemColor: 'rgba(255,255,255,.81)', // 菜单项文字色
        itemHoverColor: 'rgba(255,255,255,.81)', // 菜单项悬浮态文字色
        itemHoverBg: 'rgba(255,255,255,.2)', // 菜单项悬浮态背景色
      },
    },
  },
}

export { customThemeTokenConfig, customComponentConfig, colorPrimarys, themeModeToken }
