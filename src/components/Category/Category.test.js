import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Category from './Category';

test('renders without crashing', () => {
  const div = document.createElement('div');
  const category = {
    id: 1,
    title: 'JavaScript',
    userId: 1
}
  ReactDOM.render(
    <BrowserRouter>
        <Category category={category}/>
    </BrowserRouter>, 
      div
  );
  ReactDOM.unmountComponentAtNode(div);
});