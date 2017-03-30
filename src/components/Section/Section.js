import React from 'react';
import styles from './Section.css';

const Section = (props) => (
  <section className={styles.section}>
    {props.children}
  </section>
)

export default Section;
