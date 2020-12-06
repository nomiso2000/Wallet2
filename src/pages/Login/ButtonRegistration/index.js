import React from 'react';
import styles from './ButtonRegistration.module.css';
import { Link } from 'react-router-dom';
import routes from '../../../routes';
export function ButtonRegistration() {
  return (
    <Link to={routes.REGISTER.path}>
      {' '}
      <button className={styles.BtnReg}>РЕГИСТРАЦИЯ</button>
    </Link>
  );
}
