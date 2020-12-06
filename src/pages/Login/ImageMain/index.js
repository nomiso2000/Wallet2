import React from 'react';
import styles from '../ImageMain/ImageMain.module.css';

export function ImgMain({ children }) {
  return <div className={styles.wrap}>{children}</div>;
}
