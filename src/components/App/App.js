import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import AddCategoryPage from '../../routes/AddCategoryPage/AddCategoryPage';
import AddResourcePage from '../../routes/AddResourcePage/AddResourcePage';
import CategoryListPage from '../../routes/CategoryListPage/CategoryListPage';
import LandingPage from '../../routes/LandingPage/LandingPage';
import RegisterPage from '../../routes/RegisterPage/RegisterPage';
import ResourceListPage from '../../routes/ResourceListPage/ResourceListPage';
import ResourcePage from '../../routes/ResourcePage/ResourcePage';
import SignInPage from '../../routes/SignInPage/SignInPage';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import GeekBoxContext from '../../GeekBoxContext';
import Store from '../../STORE';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       categories: Store.categories,
       resources: Store.resources,
       users: Store.users,
       comments: Store.comments
    }
  }

  handleAddCategory = category => {
    this.setState({
      categories: [...this.state.categories, category]
    })
  }

  handleAddResource = resource => {
    this.setState({
      resources: [...this.state.resources, resource]
    })
  }

  handleAddComment = comment => {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }

  handleAddUser = user => {
    this.setState({
      users: [...this.state.users, user]
    })
  }
  
  render() {
    const value = {
      resources: this.state.resources,
      users: this.state.users,
      categories: this.state.categories,
      comments: this.state.comments,
      addCategory: this.handleAddCategory,
      addResource: this.handleAddResource,
      addComment: this.handleAddComment,
      addUser: this.handleAddUser,
    };
    console.log(value);
    console.log(this.state);
    return (
      <GeekBoxContext.Provider value={value}>
        <div className="App">
          <header className="App__nav">
            <Nav />
          </header>
          <main className="App__main">
            <Switch>
              <Route
                exact
                path='/'
                component={LandingPage}
              />
              <Route
                path='/register'
                component={RegisterPage}
              />
              <Route
                path='/signin'
                component={SignInPage}
              />
              <Route
                exact
                path='/categories'
                component={CategoryListPage}
              />
              <Route
                exact
                path='/categories/add'
                component={AddCategoryPage}
              />
              <Route
                path='/categories/:categoryId'
                component={ResourceListPage}
              />
              <Route
                exact
                path='/resource/add'
                component={AddResourcePage}
              />
              <Route
                path='/resource/:resourceId'
                component={ResourcePage}
              />
              <Route
                component={NotFoundPage}
              />
            </Switch>
          </main>
          <Footer />
        </div>
      </GeekBoxContext.Provider>
    );
  }
}

export default withRouter(App);