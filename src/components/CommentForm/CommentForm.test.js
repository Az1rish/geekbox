import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CommentForm from './CommentForm';

test('renders without crashing', () => {
  const div = document.createElement('div');
//   const CommentForm = {
    // id: 1,
    // title: 'JavaScript',
    // userId: 1
// }
  ReactDOM.render(
    <BrowserRouter>
        <CommentForm />
    </BrowserRouter>, 
      div
  );
  ReactDOM.unmountComponentAtNode(div);
});