import React, { Component } from 'react';
import styled from 'styled-components';

import WebpageBuilder from './components/organisms/WebpageBuilder.jsx'

class App extends Component {
  render() {
    return (
      <StyledContainer >
        <WebpageBuilder />
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  margin-top: 20px;
`;

export default App;
