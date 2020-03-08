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

    handleSubmitNewCategory = (e) => {
        e.preventDefault();
        const { title } = e.target;
        console.log(this.props);
        const { updateList, onAddCategorySuccess } = this.props;
        console.log(updateList);
        updateList(title);
        onAddCategorySuccess();
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