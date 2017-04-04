import React from 'react';
import styles from './About.css';

import Container from '../Container/Container';
import Row from '../Row/Row';
import Section from '../Section/Section';
import SectionHeader from '../SectionHeader/SectionHeader';
import Profile from '../Profile/Profile';

const About = () => (
  <Section>
    <Container>
      <Row>
        <SectionHeader titleHeader="About" />
      </Row>
      <Profile />
    </Container>
  </Section>
)

export default About;
