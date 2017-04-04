import React from 'react';
import styles from './SkillsKnowledge.css';

const SkillsKnowledge = () => (
  <div className={styles.category}>
    <h3 className={styles.title}>Knowledge</h3>
    <ul>
      <li className={styles.item}>BEM</li>
      <li className={styles.item}>SEO</li>
      <li className={styles.item}>ES6</li>
      <li className={styles.item}>Git Flow</li>
      <li className={styles.item}>LEMP Stack Configuration</li>
    </ul>
  </div>
)

export default SkillsKnowledge;
