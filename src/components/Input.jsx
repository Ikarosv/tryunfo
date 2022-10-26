import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class MyInput extends Component {
  render() {
    const { id, name, type, value, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        <span className="genericLabel">{name}</span>
        <input
          type={ type }
          id={ id }
          data-testid={ id }
          name={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

MyInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

MyInput.defaultProps = {
  onChange: () => {},
};
