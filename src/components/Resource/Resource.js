import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ResourceStarRating } from '../ResourceStarRating/ResourceStarRating';
import ResourcesApiService from '../../services/resources-api-service';
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

      if (words.length > 5) {
          return `${words.slice(0, 5).join(' ')} ...`;
      }

      return text;
  }

  componentDidMount() {
    ResourcesApiService.getResourceComments(this.props.resource.id)
      // .then((data) => {
        // data.json().map((comment) => this.context.addComment(comment))
      // })
      .then((res) => console.log('Comment state', res))
  }

  render() {
    const { resource } = this.props;
    const comments = this.context.comments;
    console.log('Comments', comments);
    const { category } = this.props.location.state;
    const filteredComments = comments.filter(comment => comment.resourceId === resource.id);
    const totalRating = filteredComments.map(comment => comment.rating).reduce((a, b) => a + b, 0);
    const averageRating = totalRating/filteredComments.length;
    const postTime = new Date(resource.date_created);
    postTime.toString();
    const user = this.context.users.filter(user => user.id === resource.userId)[0];
   
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

export default withRouter(Resource);