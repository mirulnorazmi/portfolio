import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { createMuiTheme } from '@material-ui/core/styles';
import './App.scss';
import './framework.scss';

import variable from './App-css-variable.scss';

export default function ThemeManager(props) {
  const dispatch = useDispatch();
  const redux = useSelector((state) => state.redux);
  // A custom theme for this app
  const themeState = redux.app.default_theme;
  const palletType = themeState == 'dark' ? 'dark' : 'light';
  const mainPrimaryColor = themeState == 'dark' ? '#2d88ff' : '#2D6FD8';
  const mainSecondaryColor = themeState == 'dark' ? '#f02849' : '#c70851';

  const theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
      // third: {
      //   main: mainThirdColor,
      // },
    },
    typography: {
      fontFamily: "'Roboto Regular', Arial, sans-serif",
      h1: {
        fontFamily: "'Roboto Medium', Arial, sans-serif",
      },
      h2: {
        fontFamily: "'Roboto Medium', Arial, sans-serif",
      },
      h3: {
        fontFamily: "'Roboto Medium', Arial, sans-serif",
      },
      h4: {
        fontFamily: "'Roboto Medium', Arial, sans-serif",
      },
      h5: {
        fontFamily: "'Roboto Medium', Arial, sans-serif",
      },
      h6: {
        fontFamily: "'Roboto Medium', Arial, sans-serif",
      },
      body1: {
        fontFamily: "'Roboto Medium', Arial, sans-serif",
      },
      button: {
        fontFamily: "'Roboto Medium', Arial, sans-serif",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {props.children}
    </ThemeProvider>
  );
}
