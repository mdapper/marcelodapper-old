import React from 'react';
import styles from './SkillsDesign.css';

import SkillItem from '../SkillItem/SkillItem';
import IconSketch from '../Icons/IconSketch';
import IconPhotoshop from '../Icons/IconPhotoshop';
import IconIllustrator from '../Icons/IconIllustrator';

const SkillsDesign = () => (
  <div className={styles.category}>
    <h3 className={styles.title}>Design</h3>
    <SkillItem icon={<IconSketch/>} skillName="Sketch" />
    <SkillItem icon={<IconPhotoshop/>} skillName="Photoshop" />
    <SkillItem icon={<IconIllustrator/>} skillName="Illustrator" />
  </div>
)

export default SkillsDesign;
