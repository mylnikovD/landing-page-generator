import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class OutputArea extends Component {
  static propTypes = {
    outputData: PropTypes.shape({
      imageFile: PropTypes.string
    }).isRequired,
    handleExport: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.outputAreaRef = React.createRef();
  }

  handleExport = (e) => {
    const text = this.outputAreaRef.current.outerHTML;
    this.props.handleExport(text);
  }

  render() {
    const { imageFile,
      bannerHeadingText,
      callToActionText } = this.props.outputData;
    return (
      <>
        <button
          type="button"
          onClick={this.handleExport}
        >
          Export
      </button>
        <StyledContainer>
          <section ref={this.outputAreaRef} style={styles.section}>
            {imageFile &&
              <img 
                src={imageFile} 
                alt="banner"
                style={styles.image} 
              />
            }
            <h1>{bannerHeadingText}</h1>
            <button 
              style={styles.button}
            >
              {callToActionText}
            </button>
          </section>
        </StyledContainer>
      </>
    );
  }
}

/* 
  Inline styles are used to save them in exported static html
*/
const styles = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '100%',
  },
  button: {
    alignSelf: 'flex-end',
    width: '50%'
  }
}

const StyledContainer = styled.div`
  margin-top: 10px;
  border: 1px dashed grey;
  padding: 5px;
`;


export default OutputArea;