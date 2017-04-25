import React from 'react';
import styles from './Contact.css';

import Section from '../Section/Section';
import Container from '../Container/Container';
import Row from '../Row/Row';
import SectionHeader from '../SectionHeader/SectionHeader';
import SectionDescription from '../SectionDescription/SectionDescription';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => (
  <Section>
    <Container>
      <Row>
        <SectionHeader titleHeader="Contact" />
      </Row>
      <Row>
        <SectionDescription>
          <p>
            I am available to work on new projects at the moment. Feel free to get in touch with me by email
            {' '}
            <a href="mailto:marcelo.daper@gmail.com">marcelo.daper@gmail.com</a>
            , or through the form below:
          </p>
          <ContactForm />
        </SectionDescription>
      </Row>
    </Container>
  </Section>
);

export default Contact;
