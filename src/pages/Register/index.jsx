import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import routes from '../../routes';
import styles from './Register.module.css';
import withAuth from '../../HOC/withAuth';
import { register } from '../../redux/auth/operations';
import { emailValid, isGood } from '../../services/helpers';
import notification from '../../services/notification';
import { Container } from '../Login/Container';
import containStyles from '../Login/Container/Container.module.css';

import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [passwordValid, setPasswordValid] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = e => {
    switch (e.target.name) {
      case 'username':
        return setUsername(e.target.value);
      case 'email':
        return setEmail(e.target.value);
      case 'password':
        return setPassword(e.target.value);
      case 'repassword':
        setPasswordValid(isGood(e.target.value));
        return setRePassword(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      emailValid(email) &&
      password.length >= 4 &&
      username.length > 0 &&
      password === rePassword
    ) {
      dispatch(register({ username, email, password }, history));
    } else {
      switch (true) {
        case !emailValid(email):
          return notification({
            type: 'warning',
            message: 'Email is not valid!',
          });
        case password.length < 4:
          return notification({
            type: 'warning',
            message: 'Password is to short!',
          });
        case password !== rePassword:
          return notification({
            type: 'warning',
            message: 'Passwords did not match',
          });
        case username.length > 0:
          return notification({
            type: 'warning',
            message: 'Enter a name',
          });
      }
    }
  };
  return (
    <Container className={containStyles.backGround}>
      <div className={styles.leftWrapper}>
        <div className={styles.violetCircle}></div>
        <div className={styles.wrap}></div>
        <span className={styles.textApp}>Finance App</span>
      </div>
      <div className={styles.rightWrapper}>
        <div className={styles.FormWrapper}>
          <p className={styles.textWallet}>Wallet</p>
          <form onSubmit={handleSubmit}>
            <label>
              <EmailIcon className={styles.EmailIcon} />
              <input
                className="input"
                className={styles.EmailForm}
                type="email"
                name="email"
                value={email}
                placeholder="E-mail"
                autoFocus
                onChange={handleChange}
              />
            </label>
            <label>
              <LockIcon className={styles.PassIcon} />
              <input
                className={styles.PassForm}
                type="password"
                name="password"
                value={password}
                placeholder="Пароль"
                onChange={handleChange}
              />
            </label>
            <label>
              <LockIcon className={styles.LockIcon} />
              <input
                className={styles.rePass}
                type="password"
                name="repassword"
                value={rePassword}
                placeholder="Подтвердить пароль"
                onChange={handleChange}
              />
            </label>
            {rePassword.length >= 4 && (
              <div
                className={
                  rePassword.length >= 4
                    ? passwordValid === 'Weak'
                      ? styles.Weak
                      : passwordValid === 'Medium'
                      ? styles.Medium
                      : styles.Strong
                    : null
                }
              ></div>
            )}

            <label>
              <AccountBoxIcon className={styles.AccountBoxIcon} />
              <input
                className={styles.labelName}
                type="name"
                name="username"
                value={username}
                placeholder="Ваше имя"
                onChange={handleChange}
              />
            </label>

            <button className={styles.BtnReg} type="submit">
              РЕГИСТРАЦИЯ
            </button>
            <Link to={routes.LOGIN.path}>
              {' '}
              <button className={styles.BtnEnter}>ВХОД</button>
            </Link>
          </form>
        </div>
        <div className={styles.pinkCircle}></div>
      </div>
    </Container>
  );
};

export default withAuth(Register);
