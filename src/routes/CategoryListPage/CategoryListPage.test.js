import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CategoryListPage from './CategoryListPage';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <BrowserRouter>
        <CategoryListPage />
      </BrowserRouter>, 
      div
  );
  ReactDOM.unmountComponentAtNode(div);
});