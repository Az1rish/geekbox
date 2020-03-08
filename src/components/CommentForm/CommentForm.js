import React, { Component } from 'react';
import Store from '../../STORE';
import './CommentForm.css';

export default class CommentForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const { text, rating } = e.target;
        const newComment = {
            text,
            rating
        }

        Store.comments.push(newComment);
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
            <label htmlFor="rating">Rate this photo!</label>
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