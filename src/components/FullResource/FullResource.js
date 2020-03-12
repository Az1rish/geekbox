import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import { ResourceStarRating } from '../ResourceStarRating/ResourceStarRating';
import GeekBoxContext from '../../GeekBoxContext';
import './FullResource.css';

class FullResource extends Component {
  static contextType = GeekBoxContext;

  ResourceDescription = ( resource ) => {
    const user = this.context.users.filter(user => user.id === resource.userId)[0];
    const postTime = new Date(resource.date_created);
    postTime.toString();
      return (
        <div className="FullResource__details">
          <div className="FullResource__text">
            <h2 className="FullResource__heading">
              {resource.title}
            </h2>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              <h3 className="FullResource__url">
                Go there now!
              </h3>
            </a>
            <p className="FullResource__description">
              {resource.description}
            </p>
            <p>
              Posted by
              {' '}
              {user.firstName}
              {' '}
              on
              {' '}
              {format(postTime, 'PPPP')}
            </p>
          </div>
        </div>
      )
    };
  
  
  ResourceComments = ( comments = [], resource ) => {
    const user = this.context.users.filter(user => user.id === resource.userId)[0];
    const filteredComments = comments.filter(comment => comment.userId === user.id);
  
    return (
      <ul className="ResourcePage__comment-list">
        {filteredComments.map((comment) => (
          <li key={comment.id} className="ResourcePage__comment">
            <p className="ResourcePage__comment-text">
              <FontAwesomeIcon icon={'comments'} />
              {' '}
              {comment.comment}
            </p>
            <p className="ResourcePage__comment-user">
              <ResourceStarRating rating={comment.rating} />
              {' - '}
              {user.firstName}
            </p>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { resource } = this.props;
    const { comments } = this.context;
    console.log(this.props)
    return (
      <>
        {this.ResourceDescription(resource)}
        {this.ResourceComments(comments, resource)}
      </>
    );
  }
};



export default FullResource;