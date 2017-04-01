import React from 'react';
import styles from './SectionDescription.css';

const SectionDescription = (props) => (
  <div className={styles.text}>
    {props.children}
  </div>
)

export default SectionDescription;
