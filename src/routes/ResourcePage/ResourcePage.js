import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CommentForm from '../../components/CommentForm/CommentForm';
import FullResource from '../../components/FullResource/FullResource';
import Store from '../../STORE';
import './ResourcePage.css';

export default class ResourcePage extends Component {
    renderResource = (id) => {
        const resource = Store.resources.filter(resource => resource.id === Number(id))[0];
        return (
            <FullResource
                resource={resource}
            />
        )
    }

    render() {
        const { resourceId } = this.props.match.params;
        const { categories, resources } = Store;
        const resource  = resources.filter(resource => resource.id === Number(resourceId))[0];
        const currentCategory = categories.filter(category => category.id === resource.categoryId)[0];
        return (
            <div className="ResourcePage">
                {this.renderResource(resourceId)}
                <CommentForm />
                <Link to='/categories'>Return to List of Categories</Link>
                <Link to={`/categories/${currentCategory.id}`}>Return to {currentCategory.title}</Link>
            </div>
        )
    }
}