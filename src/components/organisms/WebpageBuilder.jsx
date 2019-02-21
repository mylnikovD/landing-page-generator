import React from 'react';
import styled from 'styled-components';
import fileDownload from 'js-file-download';

import InputArea from '../molecules/InputArea';
import OutputArea from '../molecules/OutputArea';

import * as utils from '../../utils';

class WebpageBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: '',
      bannerHeadingText: 'Banner Heading',
      callToActionText: 'Call To Action',
    }
    this.outputAreaRef = React.createRef();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onImageChange = (data) => {
    this.setState({
      imageFile: data
    })
  }

  handleExport = (text) => {
    const textBlob = utils.createBlobFromText(text);
    const fileName = prompt('Please enter the name of the file', 'result');
    if (!fileName || fileName === null) {
      return;
    }
    fileDownload(textBlob, `${fileName}.html`);
  }

  render() {
    return (
      <StyledContainer>
        <InputArea
          handleTextChange={this.handleChange}
          handleImageChange={this.onImageChange}
          outputData={this.state}
        />
        <OutputArea 
          outputData={this.state}
          handleExport={this.handleExport}
        />
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
  padding: 20px;
  box-shadow: 0 0 8px 1px rgba(0,0,0, 0.2);
  border-radius: 5px;

  & > :first-child {
    margin-bottom: 10px;
  }
`;

export default WebpageBuilder;