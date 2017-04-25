import React from 'react';
import styles from './SectionHeader.css';

const SectionHeader = props => (
  <header className={styles.header}>
    <h2 className={styles.title}>{props.titleHeader}</h2>
    <hr />
  </header>
);

export default SectionHeader;
