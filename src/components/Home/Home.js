import React from 'react';
import styles from './Home.css';

import Row from '../Row/Row';
import About from '../About/About';
import ScrollDown from '../ScrollDown/ScrollDown';

const Home = () => (
  <div>
    <header className={styles.header}>
      <div className={styles.overlay}>
        <div className={styles.main}>
          <h1 className={styles.title}>Marcelo Dapper</h1>
          <hr className={styles.hr} />
          <p className={styles.sub}>Front End Developer</p>
        </div>
      </div>
      <ScrollDown />
    </header>
    <About />
  </div>
);

export default Home;
