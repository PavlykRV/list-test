import React from 'react';
import {
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const DeleteButton = ({ onClick }) => {
  return (
    <IconButton edge='start' color='secondary' onClick={onClick} size="small">
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteButton;
