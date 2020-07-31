import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#e91e63',
    },
    secondary: {
      main: '#651fff',
    },
  },
});

export default theme