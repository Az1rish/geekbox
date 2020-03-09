import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Category from '../../components/Category/Category';
import Store from '../../STORE';
import GeekBoxContext from '../../GeekBoxContext';
import './CategoryListPage.css';

class CategoryListPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            categories: Store.categories
        }
    }

    static contextType = GeekBoxContext;

    // componentDidMount() {
        // this._isMounted = true;
        // console.log('Mounted');
    //   }
    
    //   componentWillUnmount() {
        // this._isMounted = false;
        // console.log("Unmounted");
    //   }
    
    renderCategories() {
        const { categories } = this.state;
        console.log(categories);
        return categories.map((category) => (
            <Category
                key={category.id}
                category={category}
            />
        ));
    }

    

    render() {
        return (
            <ul className="CategoryListPage">
                {this.renderCategories()}
                <Link to='/categories/add' >+ Add New Category</Link>
            </ul>
        );
    }
}

export default withRouter(CategoryListPage);