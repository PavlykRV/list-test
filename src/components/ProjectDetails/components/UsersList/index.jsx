import React from 'react';
import { useDispatch } from 'react-redux';

import { useUsersByProjectSelect } from '../../../../selectors/users';
import { userDelete } from '../../../../redux/actions/users'

const UsersList = ({ id }) => {
  const dispatch = useDispatch()
  const users = useUsersByProjectSelect(id);

  const handleDelete = (appuserId) => {
    dispatch(userDelete({
      projectId: id,
      userId: appuserId,
    }));
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.appuserId}>
          {user.firstName}
          {user.lastName}
          <button onClick={() => handleDelete(user.appuserId)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
