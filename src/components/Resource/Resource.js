import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ResourceStarRating } from '../ResourceStarRating/ResourceStarRating';
import GeekBoxContext from '../../GeekBoxContext';
import './Resource.css';

class Resource extends Component {
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

      if (words.length > 7) {
          return `${words.slice(0, 7).join(' ')} ...`;
      }

      return text;
  }

  render() {
    const { resource } = this.props;
    const { category } = this.props.location.state;
    const { numOfComments, avgCommentRating } = resource;
    const resourceUser = resource.user
   
    return (
      <Link to={{
        pathname: `/resource/${resource.id}`,
        state: {
            category
        }
    }} className="resource">
        <div className="resource__details">
          <div className="resource__text">
            <h2 className="resource__heading">
              {resource.title}
            </h2>
            <p className="resource__description">
              {this.truncate(resource.description)}
            </p>
            <p className="little">
              Resource added by
              {' '}
              {resourceUser.user_name}
            </p>
          </div>
  
          <div className="resource__comments">
            <ResourceStarRating rating={Math.floor(avgCommentRating)} />
            {' '}
            <span id="resource__comment-count">
              {this.readableCommentCount(numOfComments)}
            </span>
          </div>
        </div>
      </Link>
    );
  }
}

export default withRouter(Resource);