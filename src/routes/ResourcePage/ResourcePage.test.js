import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ResourceListPage from '../ResourceListPage/ResourceListPage';
import CategoryListPage from '../CategoryListPage/CategoryListPage';
import ResourcePage from './ResourcePage';

test.only('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <BrowserRouter>
        <CategoryListPage>
            <ResourceListPage>
                <ResourcePage />
            </ResourceListPage>
        </CategoryListPage>
      </BrowserRouter>, 
      div
  );
  ReactDOM.unmountComponentAtNode(div);
});