import React, { Component } from 'react';

export const nullResource = {
    author: {},
    tags: []
};

const GeekBoxContext = React.createContext({
    user: {},
    setUser: () => {},
    categories: [],
    addCategory: () => {},
    resource: nullResource,
    setResource: () => {},
    updateResource: () => {},
    clearResource: () => {},
    comments: [],
    addComment: () => {},
    setComments: () => {},
    error: null,
    setError: () => {},
    clearError: () => {},
})

export default GeekBoxContext;

export class GeekBoxProvider extends Component {
    addCategory = category => {
        this.setState({
          categories: [...this.state.categories, category]
        })
      }
    
      setResource = resource => {
        this.setState({
          resource
        });
      }

      updateResource = (resource) => {
          this.setState({
              id: resource.id,
              title: resource.title,
              url: resource.url,
              description: resource.description
          });
      }

      clearResource = () => {
          this.setResource(nullResource);
          this.setComments([]);
      }
    
      addComment = comment => {
        this.setState({
          comments: [...this.state.comments, comment]
        })
      }
    
      setUser = user => {
        this.setState({
          user
        })
      }
      
      render() {
        const value = {
          resources: this.state.resources,
          user: this.state.user,
          categories: this.state.categories,
          comments: this.state.comments,
          addCategory: this.addCategory,
          setResource: this.setResource,
          updateResource: this.updateResource,
          clearResource: this.clearResource,
          addComment: this.addComment,
          setUser: this.setUser,
        };
}