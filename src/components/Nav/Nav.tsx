

import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';

import ListItemLink from '../ListItemLink';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountButton from './AccountButton';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    color: '#FFF',
    'background-color': '#121212',
    // borderBottom: `1px solid ${theme.palette.divider}`,
    'backdrop-filter': "blur(2px)",
    padding: '0 10px',
    marginBottom: '3rem',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
    'background-color': '#5f4aff',
  },
  drawerPaper: {
    width: 240,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  toolbarTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: '"Gilroy"',
    fontSize: '30px',
    flexGrow: 1,
  },
  toolbarTitle1: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: '"Gilroy"',
    fontSize: '30px',
    flexGrow: 1,
  },
  link: {
    textTransform: 'uppercase',
    color: '#e0e3bd',
    fontSize: '14px',
    margin: theme.spacing(1, 2),
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  brandLink: {
    justifyContent:"start",
    textDecoration: 'none',
    color: '#e0e3bd',
    '&:hover': {
      textDecoration: 'none',
    },
    
  },
}));

const Nav = () => {
  const matches = useMediaQuery('(min-width:900px)');
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {matches ? (
          <>
            <Typography variant="h6" noWrap className={classes.toolbarTitle}>
              {/* <a className={ classes.brandLink } href="/">TOMP Finance</a> */}
              <Link to="/" className={classes.brandLink}>
                Tomb Finance
              </Link>
            </Typography>
            <Box mr={5}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/cemetery" className={classes.link}>
                CEMETERY
              </Link>
              <Link to="/masonry" className={classes.link}>
                MASONRY
              </Link>
              <Link to="/pit" className={classes.link}>
                PIT
              </Link>
              <Link to="/sbs" className={classes.link}>
                SBS
              </Link>
              <Link to="/liquidity" className={classes.link}>
                Liquidity
              </Link>
              <Link to="/regulations" className={classes.link}>
                Regulations
              </Link>
              <a target="_blank" rel="noopener noreferrer" href="https://docs.TOMP.finance" className={classes.link}>
                Docs
              </a>
            </Box>
            <AccountButton text="Connect" />
          </>
        ) : (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.toolbarTitle1}>
            Tomb Finance
            </Typography>

            <Drawer
              className={classes.drawer}
              onEscapeKeyDown={handleDrawerClose}
              onBackdropClick={handleDrawerClose}
              variant="temporary"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
              </div>
              <Divider />
              <List>
                <ListItemLink primary="HOME" to="/" />
                <ListItemLink primary="CEMETERY" to="/cemetery" />
                <ListItemLink primary="MASONRY" to="/masonry" />
                <ListItemLink primary="PIT" to="/pit" />
                <ListItemLink primary="SBS" to="/sbs" />
                <ListItemLink primary="Liquidity" to="/liquidity" />
                <ListItemLink primary="Regulations" to="/regulations" />
                <ListItem button component="a" href="https://docs.TOMP.finance">
                  <ListItemText>DOCS</ListItemText>
                </ListItem>
                <ListItem style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccountButton text="Connect" onOpen={handleDrawerClose} />
                </ListItem>
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;