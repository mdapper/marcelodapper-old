import React from 'react';
import styles from './SkillsDesign.css';

import SkillItem from '../SkillItem/SkillItem';
import IconSketch from '../Icons/IconSketch';
import IconPhotoshop from '../Icons/IconPhotoshop';
import IconIllustrator from '../Icons/IconIllustrator';

const SkillsDesign = () => (
  <div className={styles.category}>
    <h3 className={styles.title}>Design</h3>
    <SkillItem
      icon={<IconSketch width="64px" height="64px" />}
      skillName="Sketch"
    />
    <SkillItem
      icon={<IconPhotoshop width="64px" height="64px" />}
      skillName="Photoshop"
    />
    <SkillItem
      icon={<IconIllustrator width="64px" height="64px" />}
      skillName="Illustrator"
    />
  </div>
);

export default SkillsDesign;
