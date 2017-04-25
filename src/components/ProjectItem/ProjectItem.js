import React from 'react';
import styles from './ProjectItem.css';

import Button from '../Button/Button';
import SectionDescription from '../SectionDescription/SectionDescription';

const ProjectItem = props => {
  function showButtonCode() {
    const buttonCode = props.projectCodeLink;
    if (buttonCode) {
      return (
        <Button
          link={props.projectCodeLink}
          title={props.projectTitle}
          content="Code"
        />
      );
    }
  }

  return (
    <div className={styles.project}>
      <div className={styles.header}>
        <h3 className={styles.title}>{props.projectTitle}</h3>
        <Button
          link={props.projectLiveLink}
          title={props.projectTitle}
          content="Live"
        />
        {showButtonCode()}
      </div>

      <div className={styles.display}>
        <div className={styles.displayItemLg}>
          <div className={styles.displayView}>
            <img
              src={'img/portfolio/' + props.projectImage + '.jpg'}
              alt={props.projectTitle + ' Desktop Image'}
            />
          </div>
        </div>
        <div className={styles.displayItemMd}>
          <div className={styles.displayView}>
            <img
              src={'img/portfolio/' + props.projectImage + '-tablet.jpg'}
              alt={props.projectTitle + ' Tablet Image'}
            />
          </div>
        </div>
        <div className={styles.displayItemSm}>
          <div className={styles.displayView}>
            <img
              src={'img/portfolio/' + props.projectImage + '-mobile.jpg'}
              alt={props.projectTitle + ' Mobile Image'}
            />
          </div>
        </div>
      </div>

      <SectionDescription>
        {props.children}
      </SectionDescription>
    </div>
  );
};

export default ProjectItem;
