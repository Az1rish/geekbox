import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import {
  faStar as fasStar,
  faBoxOpen,
  faComments
} from '@fortawesome/free-solid-svg-icons';
import Resource from './Resource';
import ResourceListPage from '../../routes/ResourceListPage/ResourceListPage';
import App from '../App/App';

library.add(
  farStar,
  fasStar,
  faBoxOpen,
  faComments
);

test('renders without crashing', () => {
  const div = document.createElement('div');
  const resource = {
    id: 1,
    title: 'Udemy',
    url: 'https://www.udemy.com/',
    description: "Deep v art party chicharrones pug ethical sustainable flexitarian hot chicken iceland YOLO ugh. Pickled franzen ennui edison bulb you probably haven't heard of them woke typewriter.",
    date_created: new Date(),
    categoryId: 1,
    userId: 4
  };
  const user = {
    id: 4,
    firstName: 'Dee',
    lastName: 'Hammann'
  };
  const state = {
    category: {
      id: 1,
      title: 'JavaScript',
      date_created: new Date(),
      userId: 1
    }
  };

  ReactDOM.render(
    <BrowserRouter>
      <App>
        <ResourceListPage location={state}>
          <Resource resource={resource} user={user} />
        </ResourceListPage>
      </App>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
