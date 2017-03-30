import React from 'react';
import styles from './Footer.css';

import Container from '../Container/Container';
import Row from '../Row/Row';
import SocialLinks from '../SocialLinks/SocialLinks';

const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <SocialLinks />
      <Row>
        <div className={styles.copyright}>
          Copyright &copy; { getCurrentYear() } &middot; Marcelo Dapper
        </div>
      </Row>
    </Container>
  </footer>
)

function getCurrentYear() {
  const currentYear = new Date().getFullYear();
  return currentYear;
}

export default Footer;
