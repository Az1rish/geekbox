import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AddCategoryForm from './AddCategoryForm';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <AddCategoryForm />
    </BrowserRouter>, 
      div
  );
  ReactDOM.unmountComponentAtNode(div);
});