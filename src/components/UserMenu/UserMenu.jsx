import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import css from "./UserMenu.module.css"

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

  return (
      <div className={css.divForUsermenu}>
        <h3 className={css.navTitle} >Welcome, {user.name}</h3>
          <button className={css.btnLogout} onClick={() => dispatch(logout())}>Logout</button>    
      </div>     
  )
}

export default UserMenu