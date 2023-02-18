import React, {createContext, useCallback, useState} from 'react';
import {ThemeProvider, createTheme} from '@mui/material';

export const ThemeContext = createContext('default');

const themes = {
  dark: {
    color: '#000'
  },
  light: {
    color: '#ffe'
  },
}

const themeMUI = {
  light: createTheme({
    myPalette: {},
    palette: {
      primary: {
        main: "#505050",
      },
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: {size: 'ticketButtonSize'},
            style: {
              fontSize: '11px'
            }
          }
        ]
      }
    }
  }),
  dark: createTheme({
    myPalette: {},
    palette: {
      primary: {
        main: "#2e2e2e"
      }
    }
  }),
};

export const CustomThemeProvider = ({children, initialTheme = "light"}) => {
  const [theme, setTheme] = useState({
    theme: themes[initialTheme],
    name: initialTheme,
  });

  const themeSetter = useCallback((name) => {
    if (!!themes[name]) {
      setTheme({
        name,
        theme: themes[name]
      });
    }
  });

  return (
    <ThemeContext.Provider value={{theme, themeSetter}}>
      <ThemeProvider theme={themeMUI[theme.name]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
