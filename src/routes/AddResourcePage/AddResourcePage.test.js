import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AddResourcePage from './AddResourcePage';

test('renders without crashing', () => {
  const div = document.createElement('div');
//   const AddResource = {
    // id: 1,
    // title: 'JavaScript',
    // userId: 1
// }
  ReactDOM.render(
    <BrowserRouter>
        <AddResourcePage />
    </BrowserRouter>, 
      div
  );
  ReactDOM.unmountComponentAtNode(div);
});