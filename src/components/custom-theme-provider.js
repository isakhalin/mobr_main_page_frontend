import React, {createContext, useCallback, useState} from 'react';
import {ThemeProvider, createTheme} from "@mui/material";

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
                        props: {size: 'ticketButtonSize'},  //Переопределение пропсов
                        style: {
                            fontSize: '11px'
                        }
                    }
                ]
                // styleOverrides: {    //Переопределение стилей
                //     root: {
                //         fontSize: "11px"
                //     }
                // }
            }
        }
        // typography: {
        //     fontFamily: [
        //         'Roboto',
        //         'Arial'
        //     ].join(',')
        // }
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
        name: initialTheme
    });

    const themeSetter = useCallback((name) => {
        if (!!themes[name]){  // !! - приводит значение к булеву
            setTheme({
                name,
                theme: themes[name]
            });
        }
    })

    return (
        <ThemeContext.Provider value={{theme, themeSetter}}>
            <ThemeProvider theme={themeMUI[theme.name]}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};
