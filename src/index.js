import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Required for navbar toggle

import { BrowserRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    
     <Router>
     <App />
   </Router>
    

);


