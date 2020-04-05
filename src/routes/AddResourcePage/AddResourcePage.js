import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        history.push({
            pathname: `/categories/${category.id}`,
            state: {
                category
            }
        });
    }

    render() {
        const { category } = this.props.location.state;
        return (
            <section className='AddResourcePage'>
                <h2>Add Resource</h2>
                <AddResourceForm onAddResourceSuccess={this.onAddResource} />
                <Link to={{
                    pathname: `/categories/${category.id}`,
                    state: {
                        category
                    }
                }}>Return to {category.title} category</Link>
            </section>
        )
    }
};

export default withRouter(AddResourcePage);