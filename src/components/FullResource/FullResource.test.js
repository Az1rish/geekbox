import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import FullResource from './FullResource';

test('renders without crashing', () => {
  const div = document.createElement('div');
//   const FullResource = {
    // id: 1,
    // title: 'JavaScript',
    // userId: 1
// }
  ReactDOM.render(
    <BrowserRouter>
        <FullResource />
    </BrowserRouter>, 
      div
  );
  ReactDOM.unmountComponentAtNode(div);
});