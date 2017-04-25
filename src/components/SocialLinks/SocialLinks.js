import React from 'react';
import styles from './SocialLinks.css';

import IconMail from '../Icons/IconMail';
import IconTwitter from '../Icons/IconTwitter';
import IconGithub from '../Icons/IconGithub';

const SocialLinks = () => (
  <ul className={styles.list}>
    <li className={styles.item}>
      <a href="mailto:marcelodapper@gmail.com" className={styles.link}>
        <IconMail />
      </a>
    </li>
    <li className={styles.item}>
      <a href="https://twitter.com/mdapper" className={styles.link}>
        <IconTwitter />
      </a>
    </li>
    <li className={styles.item}>
      <a href="https://github.com/mdapper" className={styles.link}>
        <IconGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
