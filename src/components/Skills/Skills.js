import React from 'react';
import styles from './Skills.css';

import Section from '../Section/Section';
import Container from '../Container/Container';
import Row from '../Row/Row';
import SectionHeader from '../SectionHeader/SectionHeader';
import SectionDescription from '../SectionDescription/SectionDescription';
import SkillsDevelopment from '../SkillsDevelopment/SkillsDevelopment';
import SkillsTools from '../SkillsTools/SkillsTools';
import SkillsDesign from '../SkillsDesign/SkillsDesign';
import SkillsKnowledge from '../SkillsKnowledge/SkillsKnowledge';

const Skills = () => (
  <Section bg bgUrl="url(&quot;../img/skills.jpg&quot;)">
    <div className={styles.overlay}>
      <Container>
        <Row>
          <SectionHeader titleHeader="Skills" />
        </Row>
        <Row>
          <SectionDescription>
            <p>
              I am passionate about the web and love to learn new technologies. Here's what I already know.
            </p>
          </SectionDescription>
        </Row>
        <Row>
          <SkillsDevelopment />
          <SkillsTools />
        </Row>
        <Row>
          <SkillsDesign />
          <SkillsKnowledge />
        </Row>
      </Container>
    </div>
  </Section>
);

export default Skills;
