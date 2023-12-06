import { Dropdown, MenuProps } from 'antd'
import { IconButton, SvgIcon } from '@/components/icon'
import { LocalEnum } from '#/enum.ts'
import useLocale, { LANGUAGE_MAP } from '@/locales/useLocale.ts'

type Locale = keyof typeof LocalEnum
export default function LocalePicker() {
  const { locale, setLocale } = useLocale()

  const localeList: MenuProps['items'] = Object.values(LANGUAGE_MAP).map((item) => {
    return {
      key: item.locale,
      label: item.label,
      icon: <SvgIcon icon={item.icon} size='20' className='rounded-md' />,
    }
  })

  return (
    <Dropdown
      placement='bottomRight'
      trigger={['click']}
      key={locale}
      menu={{ items: localeList, onClick: (e) => setLocale(e.key as Locale) }}>
      <IconButton>
        <SvgIcon icon={`ic-locale_${locale}`} size='24' className='rounded-md' />
      </IconButton>
    </Dropdown>
  )
}
