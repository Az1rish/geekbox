import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ResourceListPage from './ResourceListPage';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <BrowserRouter>
        <ResourceListPage />
      </BrowserRouter>, 
      div
  );
  ReactDOM.unmountComponentAtNode(div);
});