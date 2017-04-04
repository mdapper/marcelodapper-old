import React from 'react';
import styles from './Button.css';

const Button = props => (
  <a className={styles.default} href={props.link} title={props.title + ' ' + props.content} target="_blank">{props.content}</a>
)

export default Button;
