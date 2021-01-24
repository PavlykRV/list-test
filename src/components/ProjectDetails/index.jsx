import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import clsx from 'clsx'
import {
  Grid,
  TextField,
  Button,
} from '@material-ui/core';

import SaveIcon from '@material-ui/icons/Save';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import DeleteIcon from '@material-ui/icons/Delete';

import UsersList from './components/UsersList';
import DevicesList from './components/DevicesList';
import { projectDelete, projectUpdate } from '../../redux/actions/projects'
import { useProjectSelect } from '../../selectors/projects';
import { getPickerDate } from '../../utils/formatters';
import styles from './ProjectDetails.module.scss'

const ProjectDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const { id } = params;
  const initProject = useProjectSelect(id)

  const [project, setProject] = useState(initProject);
  const [pristine, setPristine] = useState(true);


  if (!project) {
    return <div>Project does not found</div>;
  };

  const { title, beginDate, expirationDate } = project || {};

  const handleChange = (event) => {
    event.preventDefault();

    const newProject = {
      ...project,
      [event.target.name]: event.target.value,
    };
    setProject(newProject);
    setPristine(false);
  };

  const handleDelete = (event) => {
    dispatch(projectDelete(id));
    history.push('/projects');
  }

  const handleDiscard = () => {
    setProject(initProject);
    setPristine(true);
  }

  const handleSave = () => {
    dispatch(projectUpdate(project))
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          id='outlined-basic'
          variant='outlined'
          size='small'
          label="Project Name"
          onChange={handleChange}
          value={title}
          name='title'
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id='outlined-basic'
          variant='outlined'
          type='datetime-local'
          onChange={handleChange}
          defaultValue={getPickerDate(beginDate)}
          name='beginDate'
          size='small'
          label="Initiate date"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id='outlined-basic'
          variant='outlined'
          type='datetime-local'
          onChange={handleChange}
          defaultValue={getPickerDate(expirationDate)}
          name='expirationDate'
          size='small'
          label="Completed date"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12} className={styles.actions}>
        <Button
          variant='contained'
          color='primary'
          size='small'
          onClick={handleSave}
          disabled={pristine}
          className={clsx(styles.actionBtn, styles.saveBtn)}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
        <Button
          variant='contained'
          color='primary'
          size='small'
          disabled={pristine}
          onClick={handleDiscard}
          className={clsx(styles.actionBtn, styles.resetBtn)}
          startIcon={<RotateLeftIcon />}
        >
          Discard
        </Button>
        <Button
          variant='contained'
          color='secondary'
          size='small'
          onClick={handleDelete}
          className={clsx(styles.actionBtn, styles.deleteBtn)}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <UsersList id={id} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DevicesList id={id} />
      </Grid>
    </Grid>
  );
};

export default ProjectDetails;
