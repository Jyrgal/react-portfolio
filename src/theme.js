import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { interpolateInferno } from "d3-scale-chromatic";
import { scaleLinear } from "d3-scale";

const linear = scaleLinear().domain([0, window.innerWidth]);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(0,0,0)',
    },
    secondary: {
      main: '#EC8b5E',
    },
    text: {
      main: '#ffda2a',
    }
  },
});

export default theme