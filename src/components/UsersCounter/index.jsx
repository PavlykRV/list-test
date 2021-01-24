import React from 'react';
import { useUsersByProjectSelect } from '../../selectors/users'

const UsersCounter = ({ id }) => {
  const usersCount = useUsersByProjectSelect(id).length

  return (
    <span>{usersCount}</span>
  )
}

export default UsersCounter;
