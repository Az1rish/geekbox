import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import CategoriesApiService from '../../services/categories-api-service';
import GeekBoxContext from '../../GeekBoxContext';
import './AddCategoryForm.css';

class AddCategoryForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            error: null
        }
    }
    
    static propTypes = {
        onAddCategorySuccess: PropTypes.func
    }

    static defaultProps = {
        onAddCategorySuccess: () => {}
    }

    static contextType = GeekBoxContext;

    // updateList = (title) => {
      // const newCategory = {
          // id: uuidv4(),
          // title,
          // userId: 1,
          // date_created: new Date()
      // };

      // this.context.addCategory(newCategory)
  // }

    handleSubmitNewCategory = (e) => {
        e.preventDefault();
        const { title } = e.target;
        const { onAddCategorySuccess } = this.props;
        const { addCategory, clearError, setError } = this.context;
        const newCategory = { title: title.value }
        clearError();
        CategoriesApiService.postCategory(newCategory)
          .then(addCategory)
          .then(() => {
            title.value = '';
            onAddCategorySuccess();
          })
          .catch(setError);   
    }

    render() {
        const { error } = this.state;
        return (
          <form
            className="AddCategoryForm"
            onSubmit={this.handleSubmitNewCategory}
          >
            <div role="alert">
              {error && <p className="red">{error}</p>}
            </div>
            <div className="title">
              <label htmlFor="AddCategoryForm__title">
                Title
              </label>
              <input
                required
                type='text'
                name="title"
                id="AddCategoryForm__title"
              />
            </div>
           
            <button type="submit">
              Add New Category
            </button>
          </form>
        );
      }
}

export default withRouter(AddCategoryForm);