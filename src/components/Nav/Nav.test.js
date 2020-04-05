import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import {
  faStar as fasStar,
  faBoxOpen,
  faComments
} from '@fortawesome/free-solid-svg-icons';
import Nav from './Nav';

library.add(
  farStar,
  fasStar,
  faBoxOpen,
  faComments
);

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
