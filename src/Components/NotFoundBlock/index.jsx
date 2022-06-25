import React from 'react';
import styles from './NotFoundBlock.module.scss';
const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <span>😞</span>
      <h1>Ничего не найденно</h1>
      <p>К сожалению данная страница отсутствует в нашем интернет-магазине</p>
    </div>
  );
};
export default NotFoundBlock;
