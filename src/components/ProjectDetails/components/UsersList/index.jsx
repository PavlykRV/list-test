import React from 'react';

import { useUsersByProjectSelect } from '../../../../selectors/users';

const UsersList = ({ id }) => {
  const users = useUsersByProjectSelect(id);
  return (
    <div>
      {users.map((user) => (
        <div key={user.appuserId}>
          {user.firstName}
          {user.lastName}
        </div>
      ))}
    </div>
  );
};

export default UsersList;
