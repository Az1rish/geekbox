import React, { Component } from 'react';
import Resource from '../../components/Resource/Resource';
import Store from '../../STORE';
import './ResourceListPage.css';

export default class ResourceListPage extends Component {
    renderResources() {
        return Store.resources.map((resource) => (
            <Resource
                key={resource.id}
                Resource={resource}
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
