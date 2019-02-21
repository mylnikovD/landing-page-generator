import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImageInput from '../atoms/ImageInput';
import TextInput from '../atoms/TextInput';

const InputArea = ({
  handleImageChange,
  handleTextChange,
  outputData
}) => {
    return (
      <StyledContainer>
        <ImageInput 
          onImageChange={handleImageChange}
        />
        <TextInput
          value={outputData.bannerHeadingText}
          name="bannerHeadingText"
          handleChange={handleTextChange}
          label="Banner Heading Text"
        />
        <TextInput
          value={outputData.callToActionText}
          name="callToActionText"
          handleChange={handleTextChange}
          label="Call To Action Text"
        />
      </StyledContainer>
    );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: 10px;
  }
  & :first-child {
    margin-top: 0;
  }
`;

InputArea.propTypes = {
  handleImageChange: PropTypes.func.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  outputData: PropTypes.shape({
      bannerHeadingText: PropTypes.string,
      callToActionText: PropTypes.string,
  }).isRequired
}

export default InputArea;