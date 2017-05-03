import React from 'react';
import styles from './SkillsTools.css';

import SkillItem from '../SkillItem/SkillItem';
import IconConsole from '../Icons/IconConsole';
import IconGit from '../Icons/IconGit';
import IconGithub from '../Icons/IconGithub';
import IconWebpack from '../Icons/IconWebpack';
import IconGulp from '../Icons/IconGulp';
import IconGrunt from '../Icons/IconGrunt';

const SkillsTools = () => (
  <div className={styles.category}>
    <h3 className={styles.title}>Tools</h3>
    <SkillItem icon={<IconConsole width="64px" height="64px" />} skillName="Console" />
    <SkillItem icon={<IconGit width="64px" height="64px" />} skillName="Git" />
    <SkillItem icon={<IconGithub width="64px" height="64px" />} skillName="GitHub" />
    <SkillItem icon={<IconWebpack width="64px" height="64px" />} skillName="Webpack" />
    <SkillItem icon={<IconGulp width="64px" height="64px" />} skillName="Gulp" />
    <SkillItem icon={<IconGrunt width="64px" height="64px" />} skillName="Grunt" />
  </div>
);

export default SkillsTools;
