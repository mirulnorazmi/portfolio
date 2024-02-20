import React, { Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Toolbar, IconButton, Button, Typography, Hidden, SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import LogoOnly from '../../../ASSETS/logo/logo-only.png';
// import Drawer from './component/drawer';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import './index.scss';



const pages = [
  {
    name: 'About',
    id: 'about'
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Experience',
    id: 'experience'
  },
  {
    name: 'Project',
    id: 'project',
  },
  {
    name: 'Contact',
    id: 'contact'
  }
];

export default (props: any) => {

  const redux = useSelector((state: any) => state.redux);

  const scroll = (id: any) => {
    const section: any = document.querySelector(`#${id}-section`);
    section.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };


  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor: any, open: any) => (event: any) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    // console.log('clicked me!...')
    setState({ left: open });
  };

  const list = (anchor: any) => (
    <div

      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  

  return (
    <div id='main-drawer'>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
      >
        <Toolbar style={{ minHeight: '56px' }} disableGutters>
          {redux.app.current_grid != 'xs' ? (
            <div className="i-x-center i-y-center" style={{ width: '100%' }}>
              <IconButton
                size='medium'
                style={{ marginRight: '10px' }}
                onClick={() => scroll('hero')}>
                <img src={LogoOnly} alt="Logo" width={25} />
              </IconButton>
              <Hidden xsDown implementation='css'>
                {pages.map((item) => (
                  <Button
                    variant="text"
                    color="primary"
                    style={{ padding: '10px', margin: '0 10px', height: '30px' }}
                    onClick={() => scroll(item.id)}
                  >
                    <Typography style={{ textTransform: 'none', color: '#000000' }} variant='body1'>{item.name}</Typography>
                  </Button>
                ))}
              </Hidden>
            </div>
          ) : null}

          <Hidden smUp implementation='css'>
            <div className='row-direction i-x-start i-y-center' style={{ width: '100vw' }}>
              {/* <IconButton
              size='medium'
              style={{ marginRight: '10px' }}>
              <img src={LogoOnly} alt="Logo" width={25} />
            </IconButton> */}
              
              <div className="i-x-center row-direction" style={{ width: '100%' }}>
              <IconButton
                size='medium'
                style={{ marginRight: '10px', position: 'absolute', left: 0}}
                onClick={toggleDrawer(state, true)}
              >
                <MenuRoundedIcon />
              </IconButton>
                <Button
                  size='medium'
                  style={{ marginRight: '10px' }}
                  onClick={() => scroll('hero')}>
                  <img src={LogoOnly} alt="Logo" width={25} />
                  <Typography style={{
                    textTransform: 'none',
                    marginLeft: '10px',
                    fontWeight: 'bold',
                    color: "#007EFD"
                  }}>
                    mirulnorazmi
                  </Typography>
                </Button>
              </div>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
          open={state.left}
          onClose={toggleDrawer(state, false)}
          onOpen={toggleDrawer(state, true)}
        >
          {list(state)}
        </SwipeableDrawer>
    </div >
  );
}