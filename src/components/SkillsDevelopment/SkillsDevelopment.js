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

const SkillsDevelopment = () => (
  <div className={styles.category}>
    <h3 className={styles.title}>Development</h3>
    <SkillItem
      icon={<IconHtml width="64px" height="64px" />}
      skillName="HTML"
    />
    <SkillItem icon={<IconCss width="64px" height="64px" />} skillName="CSS" />
    <SkillItem
      icon={<IconJavaScript width="64px" height="64px" />}
      skillName="JavaScript"
    />
    <SkillItem
      icon={<IconReact width="64px" height="64px" />}
      skillName="React"
    />
    <SkillItem icon={<IconPhp width="64px" height="64px" />} skillName="PHP" />
    <SkillItem
      icon={<IconWordPress width="64px" height="64px" />}
      skillName="WordPress"
    />
    <SkillItem
      icon={<IconSass width="64px" height="64px" />}
      skillName="Sass"
    />
    <SkillItem
      icon={<IconNode width="64px" height="64px" />}
      skillName="Node.js"
    />
    <SkillItem
      icon={<IconExpress width="64px" height="64px" />}
      skillName="Express"
    />
  </div>
);

export default SkillsDevelopment;
