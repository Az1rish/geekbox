import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GeekBoxContext from '../../GeekBoxContext';
import Resource from '../../components/Resource/Resource';
import './ResourceListPage.css';

export default class ResourceListPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             added: true
        }
    }
    
    static contextType = GeekBoxContext;

    renderResources() {
        const { categoryId } = this.props.match.params;
        console.log('Resources props', this.props);
        const { resources } = this.context;
        console.log('Resources context', this.context);
        const filteredResources = resources.filter(resource => resource.category.id.toString() === categoryId);
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
