import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Resource from '../../components/Resource/Resource';
import Store from '../../STORE';
import './ResourceListPage.css';

export default class ResourceListPage extends Component {
    renderResources() {
        const { categoryId } = this.props.match.params;
        const filteredResources = Store.resources.filter(resource => resource.categoryId === Number(categoryId));
        return filteredResources.map((resource) => (
            <Resource
                key={resource.id}
                resource={resource}
            />
        ));
    }

    render() {
        const { category } = this.props.location.state;
        

        return (
            <div className="ResourceListPage">
                <h2>{category.title}</h2>
                <ul className="ResourcesList">
                    {this.renderResources()}
                </ul>
                <Link to={{
                    pathname: '/resource/add',
                    state: {
                        category
                    }
                }}>
                    + Add New Resource
                </Link>
            </div>
            
        );
    }
}
