import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
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

    onAddResource = () => {
        const { history } = this.props;
        history.push('/resources/');
    }

    render() {
        console.log(this.props);
        return (
            <section className='AddResourcePage'>
                <h2>Add Resource</h2>
                <AddResourceForm onAddResourceSuccess={this.onAddResource} />
            </section>
        )
    }
};

export default withRouter(AddResourcePage);