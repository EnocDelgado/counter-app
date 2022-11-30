import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
// import { FirstApp } from './FirstApp';


// import { HelloWorld }from './HelloWorld';

import './style.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp  />
    </React.StrictMode>
)