import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CategoryListPage from '../CategoryListPage/CategoryListPage';
import ResourceListPage from './ResourceListPage';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <BrowserRouter>
        <CategoryListPage>
          <ResourceListPage />
        </CategoryListPage>
      </BrowserRouter>, 
      div
  );
  ReactDOM.unmountComponentAtNode(div);
});