import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logIn } from '../../redux/auth/operations';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { Container } from './Container';
import { FormWrapper } from './FormWrapper';
import { ButtonRegistration } from './ButtonRegistration';
import { ImgMain } from './ImageMain';
import notification from '../../services/notification';
import { emailValid } from '../../services/helpers';
import styles from './Login.module.css';
import emailStyles from './EmailForm/EmailForm.module.css';
import passStyles from './PassForm/PassForm.module.css';
import buttonStyles from './ButtonEnter/ButtonEnter.module.css';

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        return setEmail(e.target.value);
      case 'password':
        return setPassword(e.target.value);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (emailValid(email) && password.length >= 4) {
      dispatch(logIn({ email, password }, history));
    } else {
      if (!emailValid(email)) {
        return notification({
          type: 'warning',
          message: 'Email is not valid!',
        });
      } else if (password.length < 4) {
        return notification({
          type: 'warning',
          message: 'Password is to short!',
        });
      }
    }
  };

  return (
    <Container className={styles.backGround}>
      <div className={styles.leftWrapper}>
        <div className={styles.violetCircle}></div>
        <ImgMain />
        <span className={styles.textApp}>Finance App</span>
      </div>
      <div className={styles.rightWrapper}>
        <FormWrapper>
          <p className={styles.textWallet}>Wallet</p>

          <form onSubmit={handleSubmit}>
            <label>
              <EmailIcon className={emailStyles.EmailIcon} />
              <input
                type="email"
                value={email}
                onChange={handleChange}
                name="email"
                placeholder="E-mail"
                className={emailStyles.EmailForm}
                autocomplete="off"
              />
            </label>
            <label>
              <LockIcon className={passStyles.LockIcon} />
              <input
                type="password"
                value={password}
                onChange={handleChange}
                name="password"
                placeholder="Пароль"
                className={passStyles.PassForm}
                autocomplete="off"
              />
            </label>
            <button type="submit" className={buttonStyles.BtnEnter}>
              ВХОД
            </button>
          </form>
          <ButtonRegistration />
        </FormWrapper>
        <div className={styles.pinkCircle}></div>
      </div>
    </Container>
  );
}
