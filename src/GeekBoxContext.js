import React, { Component } from 'react';

export const nullResource = {
    author: {},
    tags: []
};

const GeekBoxContext = React.createContext({
    user: {},
    setUser: () => {},
    categories: [],
    setCategories: () => {},
    addCategory: () => {},
    resource: nullResource,
    resourceList: [],
    setResourceList: () => {},
    deleteResource: () => {},
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
    state = {
        user: {},
        categories: [],
        resource: nullResource,
        resourceList: [],
        comments: [],
        error: null
    }
    addCategory = category => {
        this.setState({
          categories: [...this.state.categories, category]
        })
      }

      setCategories = (categories) => {
          this.setState({ categories });
      }

      setResourceList = (resourceList) => {
          this.setState({ resourceList })
      }

      deleteResource = (resourceId) => {
          const { resourceList } = this.state;
          const newResources = resourceList.filter((resource) => resource.id !== resourceId);
          this.setState({
              resourceList: newResources
          });
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
    
      setComments = comments => {
        this.setState({
          comments: ({ comments })
        })
      }

      addComment = comment => {
        const { comments } = this.state;
        this.setComments([
            ...comments,
            comment
        ]);
      }
    
      setUser = user => {
        this.setState({
          user
        })
      }

      setError = (error) => {
          this.setState({ error });
      }

      clearError = () => {
          this.setState({ error: null });
      }
      
      render() {
        const { resource, resourceList, user, categories, comments, error } = this.state;
        const { children } = this.props;
        const value = {
          resource,
          resourceList,
          user,
          categories,
          comments,
          error,
          addCategory: this.addCategory,
          setCategories: this.setCategories,
          setResource: this.setResource,
          updateResource: this.updateResource,
          clearResource: this.clearResource,
          setComments: this.setComments,
          addComment: this.addComment,
          setUser: this.setUser,
          setError: this.setError,
          clearError: this.clearError,
          setResourceList: this.setResourceList,
          deleteResource: this.deleteResource
        };
        return (
            <GeekBoxContext.Provider value={value}>
                {children}
            </GeekBoxContext.Provider>
        )
      }
}