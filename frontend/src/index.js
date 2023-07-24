import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

var html = document.getElementsByTagName('html');
html[0].setAttribute('data-bs-theme','dark');

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(
    <React.StrictMode>
        <App tab='home' />
    </React.StrictMode>
);
