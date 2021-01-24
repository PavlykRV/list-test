import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import PeopleIcon from '@material-ui/icons/People';
import DevicesIcon from '@material-ui/icons/Devices';
import { Link } from 'react-router-dom';

const NAV_CONFIG = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <HomeIcon />,
  },
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
  },
];

const Menu = () => {
  return (
    <List>
      {NAV_CONFIG.map(({ title, path, icon }) => (
        <Link key={title} to={path}>
          <ListItem button>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default Menu;
