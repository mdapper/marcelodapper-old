import React from 'react';
import styles from './SkillsDevelopment.css';

import SkillItem from '../SkillItem/SkillItem';
import IconHtml from '../Icons/IconHtml';
import IconCss from '../Icons/IconCss';
import IconJavaScript from '../Icons/IconJavaScript';
import IconPhp from '../Icons/IconPhp';
import IconWordPress from '../Icons/IconWordPress';
import IconSass from '../Icons/IconSass';
import IconNode from '../Icons/IconNode';
import IconExpress from '../Icons/IconExpress';
import IconReact from '../Icons/IconReact';
import IconLaravel from '../Icons/IconLaravel';

const SkillsDevelopment = () => (
  <div className={styles.category}>
    <h3 className={styles.title}>Development</h3>
    <SkillItem icon={<IconHtml/>} skillName="HTML" />
    <SkillItem icon={<IconCss/>} skillName="CSS" />
    <SkillItem icon={<IconJavaScript/>} skillName="JavaScript" />
    <SkillItem icon={<IconReact/>} skillName="React" />
    <SkillItem icon={<IconPhp/>} skillName="PHP" />
    <SkillItem icon={<IconWordPress/>} skillName="WordPress" />
    <SkillItem icon={<IconSass/>} skillName="Sass" />
    <SkillItem icon={<IconNode/>} skillName="Node.js" />
    <SkillItem icon={<IconExpress/>} skillName="Express" />
    <SkillItem icon={<IconLaravel/>} skillName="Laravel" />
  </div>
)

export default SkillsDevelopment;
