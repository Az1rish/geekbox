import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ResourceListPage from '../ResourceListPage/ResourceListPage';
import ResourcePage from './ResourcePage';

test.only('renders without crashing', () => {
  const div = document.createElement('div');
  const location = {
      state: {
          category: 1
      }
  }
  ReactDOM.render(
      <BrowserRouter>
        <ResourceListPage>
            <ResourcePage location={location} />
        </ResourceListPage>
      </BrowserRouter>, 
      div
  );
  ReactDOM.unmountComponentAtNode(div);
});