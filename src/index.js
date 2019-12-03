import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LogIn from './Views/LogIn'
import * as serviceWorker from './serviceWorker';

// import {BrowserRouter} from 'react-router-dom';

ReactDOM.render( <LogIn />, document.getElementById('root'));

serviceWorker.unregister();
