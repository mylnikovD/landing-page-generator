import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Label from './InputLabel';

class ImageInput extends Component {
  static propTypes = {
    onImageChange: PropTypes.func,
  }

  static defaultProps = {
    onImageChange: () => null,
  }

  state = {
    loading: false,
  }

  handleInputChange = (ev) => {
    const element = ev.target;
    const file = element.files[0];
    const reader = new FileReader();
    this.setState({ loading: true });
    reader.onloadend = () => {
      this.props.onImageChange(reader.result);
      return this.setState({ loading: false });
    }
    reader.readAsDataURL(file);
  }
  render() {
    const { loading } = this.state;
    return (
      <Label
        label="Banner Image"
      >
        <input
          type="file"
          onChange={this.handleInputChange}
          disabled={loading}
        />
      </Label>
    );
  }
}

export default ImageInput;
