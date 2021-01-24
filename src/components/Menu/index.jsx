import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppsIcon from '@material-ui/icons/Apps';
import PeopleIcon from '@material-ui/icons/People';
import DevicesIcon from '@material-ui/icons/Devices';

const NAV_CONFIG = [
  {
    title: 'Projects',
    path: '/projects',
    icon: <AppsIcon />,
  },
  {
    title: 'Users',
    path: '/users',
    icon: <PeopleIcon />,
  },
  {
    title: 'Devices',
    path: '/devices',
    icon: <DevicesIcon />,
  }
];

const Menu = () => {
  return (
    <List>
    {NAV_CONFIG.map(({title, path, icon}) => (
      <ListItem button key={title}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    ))}
  </List>
  )
}

export default Menu;
