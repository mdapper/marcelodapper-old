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
    <SkillItem icon={<IconConsole/>} skillName="Console" />
    <SkillItem icon={<IconGit/>} skillName="Git" />
    <SkillItem icon={<IconGithub/>} skillName="GitHub" />
    <SkillItem icon={<IconWebpack/>} skillName="Webpack" />
    <SkillItem icon={<IconGulp/>} skillName="Gulp" />
    <SkillItem icon={<IconGrunt/>} skillName="Grunt" />
  </div>
)

export default SkillsTools;
