import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import CommentForm from '../../components/CommentForm/CommentForm';
import FullResource from '../../components/FullResource/FullResource';
import GeekBoxContext from '../../GeekBoxContext';
import ResourcesApiService from '../../services/resources-api-service';
import './ResourcePage.css';

export default class ResourcePage extends Component {
    static contextType = GeekBoxContext;

    static propTypes = {
      match: PropTypes.shape({
        params: PropTypes.shape({
          resourceId: PropTypes.string
        })
      }),
      location: PropTypes.shape({
        state: PropTypes.shape({
          category: PropTypes.shape({})
        })
      })
    }

    static defaultProps = {
      match: {
        params: {
          resourceId: null
        }
      },
      location: {
        state: {
          category: {}
        }
      }
    }

    componentDidMount() {
      const { match } = this.props;
      const { params } = match;
      const { resourceId } = params;
      const {
        clearError,
        setError,
        setResource,
        setComments
      } = this.context;
      clearError();
      ResourcesApiService.getResource(resourceId)
        .then(setResource)
        .catch(setError);
      ResourcesApiService.getResourceComments(resourceId)
        .then(setComments)
        .catch(setError);
    }

    renderResource = (id) => {
      const { resourceList } = this.context;
      const resource = resourceList.filter((resources) => resources.id.toString() === id)[0];
      return (
        <FullResource
          resource={resource}
        />
      );
    }

    render() {
      const { match, location } = this.props;
      const { params } = match;
      const { resourceId } = params;
      const { state } = location;
      const { categories, resourceList } = this.context;
      const { category } = state;
      const resource = resourceList.filter((singleResource) => singleResource.id.toString() === resourceId)[0];
      const currentCategory = categories.filter((singleCategory) => singleCategory.id === resource.category.id)[0];
      return (
        <div className="ResourcePage">
          {this.renderResource(resourceId)}
          {TokenService.hasAuthToken()
            ? <CommentForm category={category} resource={resource} />
            : <p className="black">Please register an account and sign in to add a comment.</p>}
          <Link to="/categories">Return to List of Categories</Link>
          {' | '}
          <Link to={{
            pathname: `/categories/${currentCategory.id}`,
            state: {
              category
            }
          }}
          >
            Return to
            {' '}
            {currentCategory.title}
            {' '}
            category
          </Link>
        </div>
      );
    }
}
