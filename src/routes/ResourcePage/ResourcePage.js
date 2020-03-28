import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CommentForm from '../../components/CommentForm/CommentForm';
import FullResource from '../../components/FullResource/FullResource';
import GeekBoxContext from '../../GeekBoxContext';
import ResourcesApiService from '../../services/resources-api-service';
import './ResourcePage.css';

export default class ResourcePage extends Component {
    static contextType = GeekBoxContext;

    componentDidMount() {
        const { resourceId } = this.props.match.params;
        console.log('Id', resourceId)
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
        const resource = this.context.resourceList.filter(resource => resource.id.toString() === id)[0];
        return (
            <FullResource
                resource={resource}
            />
        )
    }

    render() {
        console.log('context', this.context)
        const { resourceId } = this.props.match.params;
        const { categories, resourceList } = this.context;
        const { category } = this.props.location.state;
        const resource  = resourceList.filter(resource => resource.id.toString() === resourceId)[0];
        const currentCategory = categories.filter(category => category.id === resource.category.id)[0];
        return (
            <div className="ResourcePage">
                {this.renderResource(resourceId)}
                <CommentForm category={category} resource={resource} />
                <Link to='/categories'>Return to List of Categories</Link>
                <Link to={{
        pathname: `/categories/${currentCategory.id}`,
        state: {
            category
        }
    }}>Return to {currentCategory.title}</Link>
            </div>
        )
    }
}