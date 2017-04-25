import React from 'react';
import styles from './ExperienceItem.css';

const ExperienceItem = props => (
  <div className={styles.item}>
    <div className={styles.icon}>
      <div className={styles.iconWrap}>
        {props.icon}
      </div>
    </div>
    <div className={styles.description}>
      <p className={styles.period}>{props.period}</p>
      <h4 className={styles.company}>{props.company}</h4>
      <h5 className={styles.position}>{props.position}</h5>
    </div>
  </div>
);

export default ExperienceItem;
