import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { BrowserRouter } from 'react-router-dom';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { 
    faStar as fasStar,
    faBoxOpen,
    faComments
} from '@fortawesome/free-solid-svg-icons';
import './index.css';
import App from './components/App/App';

library.add(
    farStar,
    fasStar,
    faBoxOpen,
    faComments
);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
