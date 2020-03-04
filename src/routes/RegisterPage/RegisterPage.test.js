import React from 'react';
import ReactDOM from 'react-dom';
import RegisterPage from './RegisterPage';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <RegisterPage />, 
      div
  );
  ReactDOM.unmountComponentAtNode(div);
});