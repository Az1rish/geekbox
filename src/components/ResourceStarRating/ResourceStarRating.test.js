import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ResourceStarRating } from './ResourceStarRating';
import Resource from '../Resource/Resource';
import App from '../App/App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { 
    faStar as fasStar,
    faBoxOpen,
    faComments
} from '@fortawesome/free-solid-svg-icons';

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
  ReactDOM.render(
    <BrowserRouter>
      <App>
        <Resource to={`/resource/${resource.id}`} resource={resource}>
          <ResourceStarRating />
        </Resource>
      </App>
    </BrowserRouter>, div
  );
  ReactDOM.unmountComponentAtNode(div);
});