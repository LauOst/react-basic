import { ItemType } from 'antd/es/menu/hooks/useItems'
import { useCallback } from 'react'

import { AppRouteObject } from '#/router'
import { useTranslation } from 'react-i18next'

/**
 *   routes -> menus
 */
export function useRouteToMenu() {
  const { t } = useTranslation()

  const routeToMenu = useCallback(
    (items: AppRouteObject[]) => {
      return items.map((item) => {
        const menuItem: any = []
        const { meta, children } = item
        if (meta) {
          const { key, label, icon, disabled, suffix } = meta
          menuItem.key = key
          menuItem.disabled = disabled
          menuItem.label = (
            <div className={`inline-flex w-full items-center justify-between `}>
              <div className=''>{t(label)}</div>
              {suffix}
            </div>
          )
          if (icon) {
            menuItem.icon = icon
          }
        }
        if (children) {
          menuItem.children = routeToMenu(children)
        }
        return menuItem as ItemType
      })
    },
    [t],
  )
  return routeToMenu
}
