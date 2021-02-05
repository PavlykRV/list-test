export const getAvailableUsers = (users) => {
  const { totalUsers, selectedUsers } = users;

  return totalUsers.reduce((acc, user) => {
    const isExist = selectedUsers.find(userItem => `${userItem.appuserId}` === `${user.appuserId}`);

    if (isExist) {
      return acc;
    }

    return [...acc, user]
  }, [])
}