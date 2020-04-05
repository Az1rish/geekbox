import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Category.css';

export default function Category(props) {
  const { category } = props;
  return (
    <Link
      to={{
        pathname: `/categories/${category.id}`,
        state: {
          category
        }
      }}
      className="Category__link"
    >
      <li className="Category">
        <h2 className="Category__title">
          {category.title}
        </h2>
      </li>
    </Link>
  );
}

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  })
};

Category.defaultProps = {
  category: {
    id: null,
    title: null
  }
};
