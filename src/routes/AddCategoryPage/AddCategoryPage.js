import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AddCategoryForm from '../../components/AddCategoryForm/AddCategoryForm';
import './AddCategoryPage.css';

class AddCategoryPage extends Component {
    static propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func
        })
    };

    static defaultProps = {
        history: {
            push: () => {}
        }
    };

    onAddCategory = () => {
        const { history } = this.props;
        history.push('/categories');
    }

    render() {
        const { updateList } = this.props.location;
        console.log(updateList);
        return (
            <section className='AddCategoryPage'>
                <h2>Add Category</h2>
                <AddCategoryForm onAddCategorySuccess={this.onAddCategory} updateList={updateList} />
            </section>
        )
    }
};

export default withRouter(AddCategoryPage);