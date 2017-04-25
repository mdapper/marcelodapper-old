import React from 'react';
import styles from './ProjectTags.css';

const ProjectTags = props => {
  const tagItens = props.tags.map(tag => {
    return <li key={tag} className={styles.item}>{tag}</li>;
  });

  return (
    <ul className={styles.list}>
      {tagItens}
    </ul>
  );
};

export default ProjectTags;
