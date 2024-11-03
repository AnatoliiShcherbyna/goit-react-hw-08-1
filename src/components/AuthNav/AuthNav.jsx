import { NavLink } from 'react-router-dom'
import css from "./AuthNav.module.css"


const AuthNav = () => {
  return (
        <div className={css.divForNavigation}>
        <NavLink to='/register' className={css.navTitle} >
        Register
      </NavLink>
      <NavLink to='/login' className={css.navTitle} >
        Log in
    </NavLink>  

    </div>
  )
}

export default AuthNav