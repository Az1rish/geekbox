import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import GeekBoxContext from '../../GeekBoxContext';
import AddResourceForm from '../../components/AddResourceForm/AddResourceForm';
import './AddResourcePage.css';

class AddResourcePage extends Component {
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

    static contextType = GeekBoxContext;

    onAddResource = () => {
        const { history } = this.props;
        const { category } = this.props.location.state;
        console.log('cat', category)
        history.push({
            pathname: `/categories/${category.id}`,
            state: {
                category
            }
        });
    }

    render() {
        return (
            <section className='AddResourcePage'>
                <h2>Add Resource</h2>
                <AddResourceForm onAddResourceSuccess={this.onAddResource} />
            </section>
        )
    }
};

export default withRouter(AddResourcePage);