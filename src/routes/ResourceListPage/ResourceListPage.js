import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import GeekBoxContext from '../../GeekBoxContext';
import TokenService from '../../services/token-service';
import Resource from '../../components/Resource/Resource';
import ResourceApiService from '../../services/resources-api-service';
import './ResourceListPage.css';

export default class ResourceListPage extends Component {
    static contextType = GeekBoxContext;

    static propTypes = {
      match: PropTypes.shape({
        params: PropTypes.shape({
          categoryId: PropTypes.string
        })
      }),
      location: PropTypes.shape({
        state: PropTypes.shape({
          category: PropTypes.shape({
            title: PropTypes.string
          })
        })
      })
    }

      static defaultProps = {
        match: {
          params: {
            categoryId: null
          }
        },
        location: {
          state: {
            category: {
              title: null
            }
          }
        }
      }

      // get resources so resources and comments update properly
      componentDidMount() {
        this.getResources();
      }

      getResources = () => {
        const { setResourceList } = this.context;
        ResourceApiService.getResources()
          .then((data) => {
            setResourceList(data);
          });
      }

      renderResources() {
        const { match } = this.props;
        const { params } = match;
        const { categoryId } = params;
        const { resourceList } = this.context;
        const filteredResources = resourceList.filter((resource) => resource.category.id.toString() === categoryId);
        return !filteredResources.length
          ? <p className="black registerPlease">Currently no resources available. Feel free to add one.</p>
          : filteredResources.map((resource) => (
            <Resource
              key={resource.id}
              resource={resource}
            />
          ));
      }

      render() {
        const { location } = this.props;
        const { state } = location;
        const { category } = state;
        return (
          <div className="ResourceListPage">
            <h2>{category.title}</h2>
            <ul className="ResourcesList">
              {this.renderResources()}
            </ul>
            {TokenService.hasAuthToken()
              ? (
                <Link to={{
                  pathname: '/resource/add',
                  state: {
                    category
                  }
                }}
                >
                  + Add New Resource
                </Link>
              )
              : <p className="black registerPlease">If you&apos;d like to to add a resource please register an account and sign in.</p>}
          </div>

        );
      }
}
