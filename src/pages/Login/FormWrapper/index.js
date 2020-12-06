import React from 'react';
import styles from '../FormWrapper/FormWrapper.module.css';

export function FormWrapper({ children }) {
  return <div className={styles.FormWrapper}>{children}</div>;
}
