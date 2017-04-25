import React from 'react';
import styles from './ContainerFull.css';

const ContainerFull = props => (
  <div className={styles.container}>
    {props.children}
  </div>
);

export default ContainerFull;
