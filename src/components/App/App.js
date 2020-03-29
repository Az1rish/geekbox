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
import CategoriesApiService from '../../services/categories-api-service';
import ResourcesApiService from '../../services/resources-api-service';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      //  categories: [],
      //  resources: [],
       user: {},
      //  comments: []
    }
  }

  static contextType = GeekBoxContext;

  componentDidMount() {
    this.setCategories();
    this.setResources();
  }

  setCategories = () => {
    CategoriesApiService.getCategories()
      .then((data) => {
        this.context.setCategories(data)
      })
  }

  setResources = () => {
    ResourcesApiService.getResources()
      .then((data) => {
        this.context.setResourceList(data)
      })
  }

  render() {
    return (
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
    );
  }
}

export default withRouter(App);