import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import { ResourceStarRating } from '../ResourceStarRating/ResourceStarRating';
import GeekBoxContext from '../../GeekBoxContext';
import './FullResource.css';

class FullResource extends Component {
  static contextType = GeekBoxContext;

  static propTypes = {
    resource: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      user: PropTypes.shape({
        user_name: PropTypes.string
      })
    })
  }

  static defaultProps = {
    resource: {
      title: null,
      description: null,
      url: null,
      user: {
        user_name: null
      }
    }
  }

  ResourceDescription = (resource) => {
    const { user } = resource;
    const postTime = new Date(resource.date_created);
    postTime.toString();
    return (
      <div className="FullResource__details">
        <div className="FullResource__text">
          <h2 className="FullResource__heading">
            {resource.title}
          </h2>
          <p className="FullResource__description">
            {resource.description}
          </p>
          <a href={resource.url} target="_blank" rel="noopener noreferrer">
            <h3 className="FullResource__url">
              Go to
              {' '}
              {resource.title}
              {' '}
              now!
            </h3>
          </a>
          <p className="innerRight">
            {'~ '}
            Resource added by
            {' '}
            {user.user_name}
            {' '}
            on
            {' '}
            {format(postTime, 'PPPP')}
          </p>
        </div>
      </div>
    );
  };


  ResourceComments = (comments = []) => (
    <ul className="ResourcePage__comment-list">
      {comments.map((comment) => {
        const { user } = comment;
        return (
          <li key={comment.id} className="ResourcePage__comment">
            <p className="ResourcePage__comment-text">
              <FontAwesomeIcon icon="comments" />
              {' -  '}
              {comment.comment}
            </p>
            <p className="ResourcePage__comment-user">
              <ResourceStarRating rating={comment.rating} />
              {' - '}
              {user.user_name}
            </p>
          </li>
        );
      })}
    </ul>
  )

  render() {
    const { resource } = this.props;
    const { comments } = this.context;

    return (
      <>
        {this.ResourceDescription(resource)}
        {this.ResourceComments(comments)}
      </>
    );
  }
}


export default FullResource;
