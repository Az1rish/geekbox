import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ResourcesApiService from '../../services/resources-api-service';
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
        const { addResource, clearError } = this.context;
        const { category } = this.props.location.state;

        const newResource = {
          title: title.value,
          url: url.value,
          description: description.value,
          category_id: category.id,
        }
        clearError();
        ResourcesApiService.postResource(newResource)
          .then((res) => {
            addResource(res);
          })
          .then(() => {
            title.value = '';
            url.value = '';
            description.value = ''
            onAddResourceSuccess()
          })
          .catch((res) => {
            this.setState({ error: res.error.message })
          })
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
              </label>
              <input
                required
                name="title"
                id="AddResourceForm__title"
              />
            </div>
            <div className="url">
              <label htmlFor="AddResourceForm__url">
                URL (Web Address)
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
            <button type="submit" className="AddResource">
              Add New Resource
            </button>
          </form>
        );
      }
}

export default withRouter(AddResourceForm);