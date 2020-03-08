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
        return (
            <div className="ResourceListPage">
                <ul className="ResourcesList">
                    {this.renderResources()}
                </ul>
                <Link to='/resource/add'>+ Add New Resource</Link>
            </div>
            
        );
    }
}
