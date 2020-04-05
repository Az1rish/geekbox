import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ResourcesApiService from '../../services/resources-api-service';
import GeekBoxContext from '../../GeekBoxContext';
import './AddResourceForm.css';

class AddResourceForm extends Component {
  static propTypes = {
    onAddResourceSuccess: PropTypes.func,
    location: PropTypes.shape({
      state: PropTypes.shape({
        category: PropTypes.shape({
          id: PropTypes.number
        })
      })
    })
  }

  static defaultProps = {
    onAddResourceSuccess: () => {},
    location: {
      state: {
        category: {
          id: null
        }
      }
    }
  }

  static contextType = GeekBoxContext;

  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }

    handleSubmitNewResource = (e) => {
      e.preventDefault();
      const { title, url, description } = e.target;
      const { onAddResourceSuccess } = this.props;
      const { addResource, clearError } = this.context;
      const { location } = this.props;
      const { state } = location;
      const { category } = state;

      const newResource = {
        title: title.value,
        url: url.value,
        description: description.value,
        category_id: category.id
      };
      clearError();
      ResourcesApiService.postResource(newResource)
        .then((res) => {
          addResource(res);
        })
        .then(() => {
          title.value = '';
          url.value = '';
          description.value = '';
          onAddResourceSuccess();
        })
        .catch((res) => {
          this.setState({ error: res.error.message });
        });
    }

    render() {
      const { error } = this.state;
      return (
        <form
          className="AddResourceForm"
          onSubmit={this.handleSubmitNewResource}
        >
          <div role="alert">
            {error && <p className="black">{error}</p>}
          </div>
          <div className="title">
            <label htmlFor="AddResourceForm__title">
              Title
              <input
                required
                name="title"
                id="AddResourceForm__title"
              />
            </label>
          </div>
          <div className="url">
            <label htmlFor="AddResourceForm__url" className="AddResourceUrl">
              URL (Web Address, should be formatted like this &ldquo;http://www.whatever.com&rdquo;)
              <input
                required
                name="url"
                id="AddResourceForm__url"
              />
            </label>
          </div>
          <div className="description">
            <label htmlFor="AddResourceForm__description">
              Description
              <input
                required
                name="description"
                id="AddResourceForm__description"
              />
            </label>
          </div>
          <button type="submit" className="AddResource">
            Add New Resource
          </button>
        </form>
      );
    }
}

export default withRouter(AddResourceForm);
