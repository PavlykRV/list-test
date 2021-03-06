import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Item from './components/Item';
import styles from './List.module.css';
import {
  getAllProjects,
} from '../../selectors/common';

const List = () => {
  const [expandedPanel, setExpanded] = useState(false);
  const [projects, setProjects] = useState(getAllProjects());

  const handleDeleteItem = (id) => {
    const newList = projects.filter(project => project.id !== id)
    setProjects(newList)
  }

  const handleCollapse = (panel) =>  {
    setExpanded(panel);
  };

  return (
    <Grid container className={styles.root}>
      {projects.map((project) => (
        <Grid item xs={12} key={project.id} className={styles.listItem}>
          <Item expanded={expandedPanel} handleCollapse={handleCollapse} handleDelete={handleDeleteItem} project={project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default List;
