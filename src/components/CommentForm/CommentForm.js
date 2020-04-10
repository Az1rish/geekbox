import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import GeekBoxContext from '../../GeekBoxContext';
import './CommentForm.css';
import ResourcesApiService from '../../services/resources-api-service';

class CommentForm extends Component {
  static contextType = GeekBoxContext;

  static propTypes = {
    resource: PropTypes.shape({
      id: PropTypes.number
    })
  }

  static defaultProps = {
    resource: {
      id: null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { text, rating } = e.target;
    const { resource } = this.props;
    const { addComment, setError } = this.context;
    ResourcesApiService.postComment(resource.id, text.value, Number(rating.value))
      .then(addComment)
      .then(() => {
        text.value = '';
      })
      .catch(setError);
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
          <label htmlFor="rating">
            Rate this resource!
            {' '}
            <select
              required
              aria-label="Rate this photo!"
              name="rating"
              id="rating"
            >
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
          </label>
        </div>

        <button className="addComment" type="submit">
          Add comment
        </button>
      </form>
    );
  }
}

export default withRouter(CommentForm);
