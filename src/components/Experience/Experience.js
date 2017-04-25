import React from 'react';
import styles from './Experience.css';

import Section from '../Section/Section';
import Container from '../Container/Container';
import Row from '../Row/Row';
import SectionHeader from '../SectionHeader/SectionHeader';
import SectionDescription from '../SectionDescription/SectionDescription';
import ExperienceWrap from '../ExperienceWrap/ExperienceWrap';
import ExperienceItem from '../ExperienceItem/ExperienceItem';
import IconWork from '../Icons/IconWork';
import IconEducation from '../Icons/IconEducation';

const Experience = () => (
  <Section bg bgUrl="url(&quot;../img/experience.jpg&quot;)">
    <div className={styles.overlay}>
      <Container>
        <Row>
          <SectionHeader titleHeader="Experience & Education" />
        </Row>
        <Row>
          <SectionDescription>
            <p>
              Here are some highlights from my educational and professional backgrounds.
            </p>
          </SectionDescription>
        </Row>
        <Row>
          <div className={styles.container}>
            <h3 className={styles.title}>Experience</h3>
            <ExperienceWrap>
              <ExperienceItem
                period="January 2016 - Present"
                company="Sotero Tech"
                position="Front End Developer"
                icon={<IconWork />}
              />
              <ExperienceItem
                period="March 2015 - Present"
                company="Freelance"
                position="Front End Developer"
                icon={<IconWork />}
              />
              <ExperienceItem
                period="September 2013 - January 2015"
                company="Consórcio PSG"
                position="Software Developer"
                icon={<IconWork />}
              />
              <ExperienceItem
                period="July 2012 - September 2013"
                company="Consórcio Pedra Bonita"
                position="Software Developer"
                icon={<IconWork />}
              />
            </ExperienceWrap>
          </div>
          <div className={styles.container}>
            <h3 className={styles.title}>Education</h3>
            <ExperienceWrap>
              <ExperienceItem
                period="July 2013 - December 2017"
                company="Universidade Estácio de Sá"
                position="Information Systems"
                icon={<IconEducation />}
              />
              <ExperienceItem
                period="Finished on December 2016"
                company="Treehouse"
                position="Front End Developer Track"
                icon={<IconEducation />}
              />
            </ExperienceWrap>
          </div>
        </Row>
      </Container>
    </div>
  </Section>
);

export default Experience;
