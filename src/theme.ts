import { createTheme } from '@mui/material';
const palette = {
  primary: {
    main: '#5F706A', // Grey 800
    light: '#7F8C88', // Grey 700
    dark: '#34423E', // Grey 900
  },
  secondary: {
    main: '#48BB78', // Green
  },
};

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    fontSize: 13,
  },
  components: {
    MuiDatePicker: {
      styleOverrides: {
        root: {
          backgroundColor: 'red',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: 48,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 34,
          height: 20,
          padding: 0,
          '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
              transform: 'translateX(14px)',
              color: '#fff',
              '& + .MuiSwitch-track': {
                backgroundColor: '#65C466',
                opacity: 1,
                border: 0,
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
              },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
              color: '#33cf4d',
              border: '6px solid #fff',
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.7,
            },
          },
          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 14,
            height: 14,
            position: 'relative',
            top: 1,
            left: 1,
          },
          '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: '#E9E9EA',
            opacity: 1,
          },
        },
      },
    },
  },
  palette: palette,
});
