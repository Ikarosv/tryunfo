import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class InputFilter extends Component {
  displayLabel = (element) => {
    const { labelname, id } = this.props;
    return labelname ? (
      <label htmlFor={ id }>
        { element }
        { labelname }
      </label>
    ) : element;
  };

  render() {
    const {
      type, children, value, name,
      onChange, testId, id, disabled,
      placeholder, className, ...propsDefault
    } = this.props;
    const defaultValue = {
      type,
      value,
      name,
      onChange,
      id,
      disabled,
      className,
      ...propsDefault,
    };
    return (
      type === 'select' ? (
        <select { ...defaultValue } data-testid={ testId }>
          { children }
        </select>
      ) : this.displayLabel(
        <input
          { ...defaultValue }
          placeholder={ placeholder }
          data-testid={ testId }
        />,
      )
    );
  }
}

InputFilter.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

InputFilter.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

InputFilter.defaultProps = {
  type: 'text',
  disabled: false,
  placeholder: '',
  className: '',
};
