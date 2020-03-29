import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import GeekBoxContext from '../../GeekBoxContext';
import './CommentForm.css';
import ResourcesApiService from '../../services/resources-api-service';

class CommentForm extends Component {
  static contextType = GeekBoxContext;

    handleSubmit = (e) => {
        e.preventDefault();
        const { text, rating } = e.target;
        const { resource } = this.props;
        const { addComment, setError } = this.context;
        ResourcesApiService.postComment(resource.id, text.value, Number(rating.value))
          .then(addComment)
          .then(() => {
            text.value = ''
          })
          .catch(setError)
    }

    render() {
        return (
            <form
          className="CommentForm"
          onSubmit={this.handleSubmit}
        >
          <div className="text">
            <textarea
              required
              aria-label="Type a comment..."
              name="text"
              id="text"
              cols="30"
              rows="3"
              placeholder="Type a comment..."
            />
          </div>

          <div className="select">
            <label htmlFor="rating">Rate this resource!</label>
            {' '}
            <select
              required
              aria-label="Rate this photo!"
              name="rating"
              id="rating"
            >
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>

          <button type="submit">
            Post comment
          </button>
        </form>
        )
    }
}

export default withRouter(CommentForm);