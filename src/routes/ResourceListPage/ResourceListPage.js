import React, { Component } from 'react';
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
            <ul className="ResourceListPage">
                {this.renderResources()}
            </ul>
        );
    }
}
