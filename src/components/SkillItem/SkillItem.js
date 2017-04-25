import React from 'react';
import styles from './SkillItem.css';

const SkillItem = props => (
  <div className={styles.skill}>
    {props.icon}
    <p className={styles.name}>{props.skillName}</p>
  </div>
);

export default SkillItem;
