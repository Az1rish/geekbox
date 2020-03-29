import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GeekBoxContext from '../../GeekBoxContext';
import TokenService from '../../services/token-service';
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
        const { resourceList } = this.context;
        console.log('resourceList', resourceList)
        const filteredResources = resourceList.filter(resource => resource.category.id.toString() === categoryId);
        console.log('filtered resources', filteredResources)
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
                {TokenService.hasAuthToken()
                    ? <Link to={{
                            pathname: '/resource/add',
                            state: {
                                category
                            }
                        }}>
                             + Add New Resource
                        </Link>
                    : null}
            </div>
            
        );
    }
}
