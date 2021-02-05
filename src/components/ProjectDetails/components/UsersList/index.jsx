import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import {
  IconButton,
  Typography,
  Button,
  Popover,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import {
  useUsersByProjectSelect,
  useAllUserSelect,
} from '../../../../selectors/users';
import { getAvailableUsers } from '../../../../utils/filters';
import { userDelete, userAdd } from '../../../../redux/actions/users';
import styles from './UserList.module.scss';

const UsersList = ({ id }) => {
  const dispatch = useDispatch();
  const users = useUsersByProjectSelect(id);
  const allUsers = useAllUserSelect();

  const availableUsers = getAvailableUsers({
    totalUsers: allUsers,
    selectedUsers: users,
  });

  const [anchorEl, setAnchorEl] = useState(null);

  const handleDelete = (appuserId) => {
    dispatch(
      userDelete({
        projectId: id,
        userId: appuserId,
      }),
    );
  };

  const handleAddUser = (appuserId) => {
    const user = availableUsers.find((user) => user.appuserId === appuserId);
    dispatch(
      userAdd({
        ...user,
        projectId: id,
      }),
    );
    handlePopoverClose();
  };

  const handleAddClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? 'simple-popover' : undefined;

  return (
    <div className={styles.root}>
      <Typography variant='subtitle1' noWrap>
        Users:
      </Typography>
      {users.map((user) => (
        <div key={user.appuserId} className={styles.userItem}>
          {user.firstName}
          {user.lastName}
          <IconButton
            className={styles.deleteBtn}
            edge='start'
            color='secondary'
            onClick={() => handleDelete(user.appuserId)}
            size='small'
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
        </div>
      ))}
      {availableUsers.length > 0 && (
        <Fragment>
          <Button
            variant='contained'
            color='primary'
            size='small'
            onClick={handleAddClick}
            startIcon={<AddCircleOutlineIcon />}
          >
            Add User
          </Button>
          <Popover
            id={popoverId}
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <List>
              {availableUsers.map((user) => (
                <ListItem
                  button
                  key={user.appuserId}
                  onClick={() => handleAddUser(user.appuserId)}
                >
                  <ListItemText
                    primary={`${user.firstName} ${user.lastName}`}
                  />
                </ListItem>
              ))}
            </List>
          </Popover>
        </Fragment>
      )}
    </div>
  );
};

export default UsersList;
