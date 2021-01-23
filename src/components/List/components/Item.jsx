import React from 'react';
import { format } from 'date-fns';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
  IconButton,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
// import SaveIcon from '@material-ui/icons/Save';
import {
  getUsersByProject,
  getDevicesByProject,
} from '../../../selectors/common';
import styles from './Item.module.css';

const getFormattedDate = (inputDate) =>
  format(new Date(inputDate), 'yyyy-MM-dd HH:mm');

const Item = ({ expanded, handleChange, handleDelete, project }) => {
  const { id, title, beginDate, expirationDate } = project;

  const users = getUsersByProject(id);
  const devices = getDevicesByProject(id);

  return (
    <Accordion
      expanded={expanded === id}
      onChange={handleChange(id)}
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
            <Typography className={styles.title}>{title}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography className={styles.date}>
              {getFormattedDate(beginDate)}
              {expirationDate && ` - ${getFormattedDate(expirationDate)}`}
            </Typography>
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
            <IconButton
              edge='start'
              className={styles.delete}
              color='inherit'
              aria-label='menu'
            >
              <EditIcon />
            </IconButton>
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
