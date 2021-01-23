import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './Header.module.css';

const Header = ({ title }) => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          edge='start'
          className={styles.menuButton}
          color='inherit'
          aria-label='menu'
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' className={styles.title}>
          {title}
        </Typography>
        <Button color='inherit'>Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
