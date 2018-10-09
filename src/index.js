import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
          light: '#58a5f0',
          main: '#0277bd',
          dark: '#004c8c',
          contrastText: '#fff',
        },
        secondary: {
          light: '#6d6d6d',
          main: '#424242',
          dark: '#1b1b1b',
          contrastText: '#fff',
        },
    },
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
            <App/>
    </MuiThemeProvider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
