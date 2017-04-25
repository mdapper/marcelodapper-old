import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navbar.css';

import Container from '../Container/Container';
import Row from '../Row/Row';
import IconHome from '../Icons/IconHome';
import IconSkills from '../Icons/IconSkills';
import IconProjects from '../Icons/IconProjects';
import IconExperience from '../Icons/IconExperience';
import IconContact from '../Icons/IconContact';

const Navbar = () => (
  <nav className={styles.nav}>
    <Container>
      <Row>
        <div className={styles.header}>
          <NavLink exact to="/" className={styles.brand} href="">
            <img src="./img/Logo.svg" alt="logo" />
          </NavLink>
        </div>

        <div className={styles.menu}>
          <ul className={styles.menuList}>
            <li className={styles.item}>
              <NavLink exact to="/">
                <span className={styles.icon}><IconHome /></span>
                <span className={styles.label}>Home</span>
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to="/skills">
                <span className={styles.icon}><IconSkills /></span>
                <span className={styles.label}>Skills</span>
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to="/projects">
                <span className={styles.icon}><IconProjects /></span>
                <span className={styles.label}>Projects</span>
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to="/experience">
                <span className={styles.icon}><IconExperience /></span>
                <span className={styles.label}>Experience</span>
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to="/contact">
                <span className={styles.icon}><IconContact /></span>
                <span className={styles.label}>Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </Row>
    </Container>
  </nav>
);

export default Navbar;
