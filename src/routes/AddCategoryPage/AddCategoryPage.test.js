import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AddCategoryPage from './AddCategoryPage';

test('renders without crashing', () => {
  const div = document.createElement('div');
//   const AddCategory = {
    // id: 1,
    // title: 'JavaScript',
    // userId: 1
// }
  ReactDOM.render(
    <BrowserRouter>
        <AddCategoryPage />
    </BrowserRouter>, 
      div
  );
  ReactDOM.unmountComponentAtNode(div);
});