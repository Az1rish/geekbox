import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddResourceForm.css';

export default class AddResourceForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            error: null
        }
    }
    
    static propTypes = {
        onAddResourceSuccess: PropTypes.func
    }

    static defaultProps = {
        onAddResourceSuccess: () => {}
    }

    handleSubmitNewResource = (newResource) => {
        console.log(newResource)
    }

    render() {
        const { error } = this.state;
        return (
          <form
            className="AddResourceForm"
            onSubmit={this.handleSubmitNewResource}
          >
            <div role="alert">
              {error && <p className="red">{error}</p>}
            </div>
            <div className="title">
              <label htmlFor="AddResourceForm__title">
                Title
              </label>
              <input
                required
                name="title"
                id="AddResourceForm__title"
              />
            </div>
            <div className="url">
              <label htmlFor="AddResourceForm__url">
                URL
              </label>
              <input
                required
                name="url"
                id="AddResourceForm__url"
              />
            </div>
            <div className="description">
              <label htmlFor="AddResourceForm__description">
                Description
              </label>
              <input
                required
                name="description"
                id="AddResourceForm__description"
              />
            </div>
            <button type="submit">
              Add New Resource
            </button>
          </form>
        );
      }
}