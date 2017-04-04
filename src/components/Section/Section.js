import React from 'react';
import styles from './Section.css';

const Section = (props) => {
  let styleBackground = {};
  if (props.bg) {
    styleBackground = {
      backgroundImage: props.bgUrl,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      paddingTop: '0',
      paddingBottom: '0'
    };
  }

  return (
    <section className={styles.section} style={styleBackground}>
      {props.children}
    </section>
  )

}

export default Section;
