import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AddResourcePage from './AddResourcePage';
import ResourceListPage from '../ResourceListPage/ResourceListPage';
import CategoryListPage from '../CategoryListPage/CategoryListPage';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <CategoryListPage>
          <ResourceListPage>
            <AddResourcePage />
          </ResourceListPage>
        </CategoryListPage>
    </BrowserRouter>, 
      div
  );
  ReactDOM.unmountComponentAtNode(div);
});