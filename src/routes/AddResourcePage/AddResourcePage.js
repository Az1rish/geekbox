import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import GeekBoxContext from '../../GeekBoxContext';
import AddResourceForm from '../../components/AddResourceForm/AddResourceForm';
import './AddResourcePage.css';

class AddResourcePage extends Component {
    static propTypes = {
      history: PropTypes.shape({
        push: PropTypes.func
      }),
      location: PropTypes.shape({
        state: PropTypes.shape({
          category: PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string
          })
        })
      })
    };

    static defaultProps = {
      history: {
        push: () => {}
      },
      location: {
        state: {
          category: {
            id: null,
            title: null
          }
        }
      }
    };

    static contextType = GeekBoxContext;

    onAddResource = () => {
      const { history, location } = this.props;
      const { state } = location;
      const { category } = state;
      history.push({
        pathname: `/categories/${category.id}`,
        state: {
          category
        }
      });
    }

    render() {
      const { location } = this.props;
      const { state } = location;
      const { category } = state;
      return (
        <section className="AddResourcePage">
          <h2>Add Resource</h2>
          <AddResourceForm onAddResourceSuccess={this.onAddResource} />
          <Link to={{
            pathname: `/categories/${category.id}`,
            state: {
              category
            }
          }}
          >
            Return to
            {' '}
            {category.title}
            {' '}
            category
          </Link>
        </section>
      );
    }
}

export default withRouter(AddResourcePage);
