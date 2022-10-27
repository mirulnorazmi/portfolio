import React, { Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Toolbar, IconButton, Button, Typography, Hidden } from '@material-ui/core';
import LogoOnly from '../../../ASSETS/logo/logo-only.png';
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
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div id='main-drawer'>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
      >
        <Toolbar style={{ minHeight: '56px' }} disableGutters>
          {redux.app.current_grid != 'xs' && redux.app.current_grid != 'sm' ? (
            <div className="i-x-center i-y-center" style={{ width: '100%' }}>
              <IconButton
                size='medium'
                style={{ marginRight: '10px' }}>
                <img src={LogoOnly} alt="Logo" width={25} />
              </IconButton>
              <Hidden smDown implementation='css'>
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
            {/* <IconButton
              size='medium'
              style={{ marginRight: '10px' }}>
              <img src={LogoOnly} alt="Logo" width={25} />
            </IconButton> */}
            <IconButton
              size='medium'
              style={{ marginRight: '10px' }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div >
  );
}