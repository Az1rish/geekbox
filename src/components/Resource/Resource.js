import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ResourceStarRating } from '../ResourceStarRating/ResourceStarRating';
import GeekBoxContext from '../../GeekBoxContext';
import './Resource.css';

export default class Resource extends Component {
  static contextType = GeekBoxContext;

  readableCommentCount = (number) => {
    switch (number) {
        case 0:
            return 'no comments yet';

        case 1:
            return 'based on 1 review';

        default:
            return `based on ${number} reviews`;
    }
}

truncate = (text) => {
    const words = text.split(' ');

    if (words.length > 5) {
        return `${words.slice(0, 5).join(' ')} ...`;
    }

    return text;
}
  render() {
    const { resource } = this.props;
    const { comments } = this.context;
    const filteredComments = comments.filter(comment => comment.resourceId === resource.id);
    const totalRating = filteredComments.map(comment => comment.rating).reduce((a, b) => a + b, 0);
    const averageRating = totalRating/filteredComments.length;
    const postTime = new Date(resource.date_created);
    postTime.toString();
    const user = this.context.users.filter(user => user.id === resource.userId)[0];
    
    return (
      <Link to={`/resource/${resource.id}`} className="resource">
        <div className="resource__details">
          <div className="resource__text">
            <h2 className="resource__heading">
              {resource.title}
            </h2>
            <p className="resource__description">
              {this.truncate(resource.description)}
            </p>
            <p>
              Posted by
              {' '}
              {user.firstName}
            </p>
          </div>
  
          <div className="resource__comments">
            <ResourceStarRating rating={Math.floor(averageRating)} />
            {' '}
            <span id="resource__comment-count">
              {this.readableCommentCount(filteredComments.length)}
            </span>
          </div>
        </div>
      </Link>
    );
  }

    
  }