import React, { useState, useEffect, Fragment } from 'react';
import { format } from 'date-fns';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
  IconButton,
  TextField,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import {
  getUsersByProject,
  getDevicesByProject,
} from '../../../selectors/common';
import styles from './Item.module.css';

const getFormattedDate = (inputDate) =>
  format(new Date(inputDate), 'yyyy-MM-dd HH:mm');

const Item = ({ expanded, handleCollapse, handleDelete, project }) => {
  const [mode, setMode] = useState('read');
  const [item, setItem] = useState(project);
  const { id, title, beginDate, expirationDate } = item;

  const handleEditMode = () => {
    setMode('edit');
  };

  const handleReadMode = () => {
    setMode('read');
  };

  const handleChange = (event) => {
    event.preventDefault();

    const newItem = {
      ...item,
      [event.target.name]: event.target.value,
    };
    setItem(newItem);
  };

  const handleSaveChange = () => {
    console.log('INIT PROJECT:', project);
    console.log('CURRENT PROJECT', item);
    handleReadMode();
  }

  const handleItemToggle = () => {
    if (mode === 'read') {
      handleCollapse(id);
    }
  };

  useEffect(() => {
    if (expanded !== id) {
      handleReadMode();
    }
  }, [expanded, id]);

  const users = getUsersByProject(id);
  const devices = getDevicesByProject(id);

  return (
    <Accordion
      expanded={expanded === id}
      onChange={handleItemToggle}
      className={styles.root}
    >
      <AccordionSummary
        classes={{
          root: styles.summary,
        }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1bh-content'
        id='panel1bh-header'
      >
        <Grid container>
          <Grid item xs={12} sm={6}>
            {mode === 'read' ? (
              <Typography className={styles.title}>{title}</Typography>
            ) : (
              <TextField
                id='outlined-basic'
                variant='outlined'
                onChange={handleChange}
                value={title}
                name='title'
              />
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            {mode === 'read' ? (
              <Typography className={styles.date}>
                {getFormattedDate(beginDate)}
                {expirationDate && ` - ${getFormattedDate(expirationDate)}`}
              </Typography>
            ) : (
              <Fragment>
                <TextField
                  id='outlined-basic'
                  variant='outlined'
                  type='datetime-local'
                  onChange={handleChange}
                  defaultValue={beginDate}
                  name='beginDate'
                />
                <TextField
                  id='outlined-basic'
                  variant='outlined'
                  type='datetime-local'
                  onChange={handleChange}
                  defaultValue={expirationDate}
                  name='expirationDate'
                />
              </Fragment>
            )}
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography className={styles.subTitle}>Users:</Typography>
            <ul>
              {users.map((user) => (
                <li key={user.appuserId}>{user.firstName}</li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography className={styles.subTitle}>Devices:</Typography>
            <ul>
              {devices.map((device) => (
                <li key={device.deviceId}>{device.serialNumber}</li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} className={styles.actions}>
            {mode === 'read' ? (
              <IconButton
                edge='start'
                className={styles.delete}
                color='inherit'
                aria-label='menu'
                onClick={handleEditMode}
              >
                <EditIcon />
              </IconButton>
            ) : (
              <IconButton
                edge='start'
                className={styles.delete}
                color='inherit'
                aria-label='menu'
                onClick={handleSaveChange}
              >
                <SaveIcon />
              </IconButton>
            )}

            <IconButton
              edge='start'
              className={styles.edit}
              color='inherit'
              aria-label='menu'
              onClick={() => handleDelete(id)}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default Item;
