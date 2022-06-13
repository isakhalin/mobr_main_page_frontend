//React comps
import React from 'react';
import ReactDOM from 'react-dom/client';

//Custom comps
import {App} from './App';

//Style
import './index.css';
import {StyledEngineProvider} from "@mui/material/styles";
import {CustomThemeProvider} from "./components"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <CustomThemeProvider>
        <StyledEngineProvider injectFirst>
            <App/>
        </StyledEngineProvider>
    </CustomThemeProvider>
    // </React.StrictMode>
);
