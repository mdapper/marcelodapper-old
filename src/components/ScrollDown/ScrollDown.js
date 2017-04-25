import React from 'react';
import styles from './ScrollDown.css';

const ScrollDown = props => (
  <div className={styles.container}>
    <div className={styles.mousey}>
      <div className={styles.scroller} />
    </div>
  </div>
);

export default ScrollDown;
