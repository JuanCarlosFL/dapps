import merge from 'lodash.merge';
import { createTheme } from '@material-ui/core/styles';
import { Theme } from './theme.vm';

const defaultTheme = createTheme();

export const theme: Theme = merge(defaultTheme, {
  palette: {
    primary: {
      light: '#ec7e2a',
      main: '#ed6c0b',
      dark: '#d15f08',
    },
    secondary: {
      light: '#fff584',
      main: '#d6c254',
      dark: '#a29223',
    },
    success: {
      main: '#43a047',
    },
    info: {
      main: '#1976d2',
    },
    warning: {
      main: '#ffa000',
    },
    table: {
      row: {
        main: '#ddd',
      },
    },
  },
} as Theme);
