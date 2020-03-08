import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddCategoryForm.css';

export default class AddCategoryForm extends Component {
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

    handleSubmitNewCategory = (newCategory) => {
        console.log(newCategory)
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