import React from 'react';
import styles from './Contact.css';

import Section from '../Section/Section';
import Container from '../Container/Container';
import Row from '../Row/Row';
import SectionHeader from '../SectionHeader/SectionHeader';
import SectionDescription from '../SectionDescription/SectionDescription';
import ContactItem from '../ContactItem/ContactItem';
import IconMail from '../Icons/IconMail';
import IconTelephone from '../Icons/IconTelephone';
import IconTwitter from '../Icons/IconTwitter';
import IconGithub from '../Icons/IconGithub';

const Contact = () => (
  <Section>
    <Container>
      <Row>
        <SectionHeader titleHeader="Contact" />
      </Row>
      <Row>
        <SectionDescription>
          <p>
            I am available to work on new projects at the moment. Feel free to get in touch with me:
          </p>
          <ul>
            <ContactItem
              icon={<IconMail width="32px" height="32px" />}
              link="mailto:marcelo.daper@gmail.com"
            >
              marcelo.daper@gmail.com
            </ContactItem>
            <ContactItem
              icon={<IconTelephone width="32px" height="32px" />}
              link="tel:+5571999654661"
            >
              +55 (71) 99965-4661
            </ContactItem>
            <ContactItem
              icon={<IconTwitter width="32px" height="32px" />}
              link="https://twitter.com/mdapper"
            >
              @mdapper
            </ContactItem>
            <ContactItem
              icon={<IconGithub width="32px" height="32px" />}
              link="https://github.com/mdapper"
            >
              mdapper
            </ContactItem>
          </ul>
        </SectionDescription>
      </Row>
    </Container>
  </Section>
);

export default Contact;
