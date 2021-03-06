import React, { Component } from 'react';

export const nullResource = {
  id: null,
  title: null,
  url: null,
  description: null
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
  addResource: () => {},
  updateResource: () => {},
  clearResource: () => {},
  comments: [],
  addComment: () => {},
  setComments: () => {},
  error: null,
  setError: () => {},
  clearError: () => {}
});

export default GeekBoxContext;

export class GeekBoxProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      categories: [],
      resource: nullResource,
      resourceList: [],
      comments: [],
      error: null
    };
  }

  addCategory = (category) => {
    const { categories } = this.state;
    this.setState({
      categories: [...categories, category.category]
    });
  }

  setCategories = (categories) => {
    this.setState({ categories });
  }

  setResourceList = (resourceList) => {
    this.setState({ resourceList });
  }

  deleteResource = (resourceId) => {
    const { resourceList } = this.state;
    const newResources = resourceList.filter((resource) => resource.id !== resourceId);
    this.setState({
      resourceList: newResources
    });
  }

  setResource = (resource) => {
    this.setState({
      resource
    });
  }

  addResource = (resource) => {
    const { resourceList } = this.state;
    this.setState({
      resourceList: [...resourceList, resource]
    });
  }

  updateResource = (resource) => {
    this.setState({
      resource: {
        id: resource.id,
        title: resource.title,
        url: resource.url,
        description: resource.description,
        numOfComments: resource.numOfComments + 1,
        avgCommentRating: resource.avgCommentRating
      }
    });
  }

  clearResource = () => {
    this.setResource(nullResource);
    this.setComments([]);
  }

  setComments = (comments) => {
    this.setState({
      comments
    });
  }

  addComment = (comment) => {
    const { comments } = this.state;
    const { resource } = comments[comments.length - 1];
    this.setComments([
      ...comments,
      comment
    ]);
    this.updateResource(resource);
  }

  setUser = (user) => {
    this.setState({
      user
    });
  }

  setError = (error) => {
    this.setState({ error });
  }

  clearError = () => {
    this.setState({ error: null });
  }

  render() {
    const {
      resource, resourceList, user, categories, comments, error
    } = this.state;
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
      addResource: this.addResource,
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
    );
  }
}
