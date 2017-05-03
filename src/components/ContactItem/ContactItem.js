import React from 'react';
import styles from './ContactItem.css';

const ContactItem = props => (
  <li className={styles.item}>
    <a className={styles.link} href={props.link}>{props.icon} {props.children}</a>
  </li>
);

export default ContactItem;
