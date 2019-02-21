import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const Label = ({
  label,
  children
}) => {
  return (
    <StyledLabel>
      <StyledText>{label}</StyledText>
      {children}
    </StyledLabel>
  )
}

Label.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
}

Label.defaultProps = {
  label: '',
  children: null,
};

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const StyledText = styled.span`
  display: block;
  margin-bottom: 5px;
`;

export default Label;