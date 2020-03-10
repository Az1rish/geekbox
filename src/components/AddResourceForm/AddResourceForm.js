import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import GeekBoxContext from '../../GeekBoxContext';
import './AddResourceForm.css';

class AddResourceForm extends Component {
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

    static contextType = GeekBoxContext;

    handleSubmitNewResource = (e) => {
        e.preventDefault();
        const { title, url, description } = e.target;
        const { onAddResourceSuccess } = this.props;
        const { category } = this.props.location.state;
        const newResource = {
          id: uuidv4(),
          title: title.value,
          url: url.value,
          description: description.value,
          date_created: new Date(),
          userId: 1,
          categoryId: category.id
        }
        this.context.addResource(newResource);
        onAddResourceSuccess();
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

export default withRouter(AddResourceForm);