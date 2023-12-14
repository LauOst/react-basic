import { NavLink } from 'react-router-dom'
import DashboardImg from '@/assets/images/logo/liuLogo-white.png'
// import DashboardImg from '@/assets/images/logo/testLogo.png'

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <NavLink to='/' className='no-underline'>
      <img className={`rounded-full ${className}`} src={DashboardImg} alt='logo' />
    </NavLink>
  )
}

export default Logo
