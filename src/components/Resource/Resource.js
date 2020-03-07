import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ResourceStarRating } from '../ResourceStarRating/ResourceStarRating';

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

    if (words.length > 10) {
        return `${words.slice(0, 10).join(' ')} ...`;
    }

    return text;
}

export default function Resource(props) {
    const { resource } = props;
    const postTime = new Date(resource.date_created);
    postTime.toString();
    return (
      <Link to={`/resource/${resource.id}`} className="resource">
        <div className="resource__image" style={{ backgroundImage: `url(${resource.image})` }} />
  
        <div className="resource__details">
          <div className="resource__text">
            <h2 className="resource__heading">
              {resource.title}
            </h2>
            <h3 className="resource__location">
              {resource.location}
            </h3>
            <p className="resource__description">
              {truncate(resource.description)}
            </p>
            <p>
              Posted by
              {' '}
              {resource.user.full_name}
              {' '}
              on
              {' '}
              {format(postTime, 'PPPP')}
            </p>
          </div>
  
          <div className="resource__comments">
            <ResourceStarRating rating={resource.average_comment_rating} />
            <span id="resource__comment-count">
              {readableCommentCount(resource.number_of_comments)}
            </span>
          </div>
        </div>
      </Link>
    );
  }