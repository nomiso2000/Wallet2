import React from 'react';
import styles from './Header.module.css';
import logo from '../../styles/css/icon/Group.svg';
import logout from '../../styles/css/icon/exit 1.svg';
import I from '../../styles/css/icon/Vector 4.svg';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { Link, useHistory } from 'react-router-dom';
import routes from '../../routes';

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  let name = useSelector(state => state?.auth?.user?.username);
  return (
    <div className={styles.header}>
      <Link to={routes.HOME.path}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" className={styles.headerLogo} />
          <p className={styles.logoText}>Wallet</p>
        </div>
      </Link>

      <div className={styles.headerEnd}>
        <span className={styles.headerName}>{name}</span>
        <img src={I} alt="I" className={styles.headerI} />
        <a
          className={styles.headerLogoutLink}
          onClick={() => dispatch(logOut(history))}
        >
          <img src={logout} alt="logout" />
          <span className={styles.headerName2}>Выйти</span>
        </a>
      </div>
    </div>
  );
}

export default Header;
