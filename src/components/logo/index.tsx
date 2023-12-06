import { NavLink } from 'react-router-dom'
import DashboardImg from '@/assets/images/logo/liuLogo.png'

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <NavLink to='/' className='no-underline'>
      <img className={`rounded-full ${className}`} src={DashboardImg} alt='logo' />
    </NavLink>
  )
}

export default Logo
