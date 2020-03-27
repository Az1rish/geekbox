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
// import GeekBoxContext from '../../GeekBoxContext';
import CategoriesApiService from '../../services/categories-api-service';
import ResourcesApiService from '../../services/resources-api-service';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       categories: [],
       resources: [],
       user: {},
       comments: []
    }
  }

  componentDidMount() {
    this.setCategories();
    this.setResources()
    // this.setComments()
  }

  setCategories = () => {
    CategoriesApiService.getCategories()
      .then((data) => {
        this.setState({
          categories: data
        })
      })
      // .then(() => console.log('State', this.state));;
  }

  setResources = () => {
    ResourcesApiService.getResources()
      .then((data) => {
        this.setState({
          resources: data
        })
      })
      // .then(() => console.log('State', this.state));;
  }

  // setComments = () => {
    // ResourcesApiService.getComments()
      // .then((data) => {
        // this.setState({
          // comments: data
        // })
      // })
      // .then(() => console.log('State', this.state));;
  // }

  render() {
    return (
      // <GeekBoxContext.Provider value={value}>
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
      // </GeekBoxContext.Provider>
    );
  }
}

export default withRouter(App);