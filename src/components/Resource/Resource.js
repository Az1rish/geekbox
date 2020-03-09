import React from 'react';
import { Link } from 'react-router-dom';
import { ResourceStarRating } from '../ResourceStarRating/ResourceStarRating';
import Store from '../../STORE';
import './Resource.css';

function readableCommentCount(number) {
    switch (number) {
        case 0:
            return 'no comments yet';

        case 1:
            return 'based on 1 review';

        default:
            return `based on ${number} reviews`;
    }
}

function truncate(text) {
    const words = text.split(' ');

    if (words.length > 5) {
        return `${words.slice(0, 5).join(' ')} ...`;
    }

    return text;
}

export default function Resource(props) {
    const { resource } = props;
    const { comments } = Store;
    const filteredComments = comments.filter(comment => comment.resourceId === resource.id);
    const totalRating = filteredComments.map(comment => comment.rating).reduce((a, b) => a + b, 0);
    const averageRating = totalRating/filteredComments.length;
    const postTime = new Date(resource.date_created);
    postTime.toString();
    const user = Store.users.filter(user => user.id === resource.userId);
    
    return (
      <Link to={`/resource/${resource.id}`} className="resource">
        <div className="resource__details">
          <div className="resource__text">
            <h2 className="resource__heading">
              {resource.title}
            </h2>
            <p className="resource__description">
              {truncate(resource.description)}
            </p>
            <p>
              Posted by
              {' '}
              {user[0].firstName}
            </p>
          </div>
  
          <div className="resource__comments">
            <ResourceStarRating rating={Math.floor(averageRating)} />
            {' '}
            <span id="resource__comment-count">
              {readableCommentCount(filteredComments.length)}
            </span>
          </div>
        </div>
      </Link>
    );
  }