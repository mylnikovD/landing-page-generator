import React from 'react';
import PropTypes from 'prop-types';

import Label from './InputLabel';

const TextInput = ({
  value,
  handleChange,
  label,
  ...rest
}) => {
  return (
    <Label
      label={label}
    >
      <input
        {...rest}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </Label>
  );
}

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string
}

TextInput.defaultProps = {
  label: ''
}

export default TextInput;