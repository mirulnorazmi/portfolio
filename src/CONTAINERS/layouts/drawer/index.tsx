import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core';
import LogoOnly from '../../../ASSETS/logo/logo-only.png';
import './index.scss';

const pages = ['About', 'Skills', 'Contact'];

export default (props: any) => {

  return (
    <div id='main-drawer'>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
      >
        <Toolbar style={{ padding: '0 140px', minHeight: '56px' }} disableGutters>

          <IconButton
            size='medium'
            style={{ marginRight: '10px' }}>
            <img src={LogoOnly} alt="Logo" width={25} />
          </IconButton>

          {pages.map((page) => (
            <Button variant="text" color="primary" style={{ padding: '10px', margin: '0 10px', height: '30px' }}>
              <Typography style={{ textTransform: 'none', color: '#000000' }} variant='body1'>{page}</Typography>
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      <Toolbar />
    </div >
  );
}