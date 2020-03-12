import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CommentForm from '../../components/CommentForm/CommentForm';
import FullResource from '../../components/FullResource/FullResource';
import GeekBoxContext from '../../GeekBoxContext';
import './ResourcePage.css';

export default class ResourcePage extends Component {
    static contextType = GeekBoxContext;

    renderResource = (id) => {
        const resource = this.context.resources.filter(resource => resource.id.toString() === id)[0];
        return (
            <FullResource
                resource={resource}
            />
        )
    }

    render() {
        const { resourceId } = this.props.match.params;
        const { categories, resources } = this.context;
        const { category } = this.props.location.state;
        const resource  = resources.filter(resource => resource.id.toString() === resourceId)[0];
        const currentCategory = categories.filter(category => category.id === resource.categoryId)[0];
        
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