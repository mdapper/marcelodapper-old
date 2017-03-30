import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Navbar.css';

import Container from '../Container/Container';
import Row from '../Row/Row';

const Navbar = () => (
  <nav className={styles.navbar}>
    <Container>
      <Row>
        <div className={styles.navbar__header}>
          <Link to="/" className={styles.navbar__brand} href=""><img src="./img/Logo.svg" alt="logo"/></Link>
        </div>

        <div className={styles.navbar__menu}>
          <ul className={styles.navbar__nav}>
            <li className={styles.navbar__item}>
              <Link to="/" href="#about">Home</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/skills" href="#skills">Skills</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/projects" href="#projects">Projects</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/experience" href="#experience">Experience</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/contact" href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </Row>
    </Container>
  </nav>
)

export default Navbar;
