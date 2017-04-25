import React from 'react';
import styles from './ExperienceWrap.css';

const ExperienceWrap = props => (
  <div className={styles.wrap}>
    {props.children}
  </div>
);

export default ExperienceWrap;
