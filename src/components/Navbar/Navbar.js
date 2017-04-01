import React from 'react';
import { NavLink } from 'react-router-dom'
import styles from './Navbar.css';

import Container from '../Container/Container';
import Row from '../Row/Row';

const Navbar = () => (
  <nav className={styles.nav}>
    <Container>
      <Row>
        <div className={styles.header}>
          <NavLink exact to="/" className={styles.brand} href=""><img src="./img/Logo.svg" alt="logo"/></NavLink>
        </div>

        <div className={styles.navbar__menu}>
          <ul className={styles.navbar__nav}>
            <li className={styles.item}>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to="/experience">Experience</NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </Row>
    </Container>
  </nav>
)

export default Navbar;
