import React, { Component } from 'react';
import Slider from './slider';
class twoComponent extends Component {
  //eslint-disable-next-line
  constructor(props) {
    super(props);
    console.log(props);
  }
  
  render() {
    const { two } = this.props;
    return (
      <div>
        <Slider two={two} />
      </div>
    );
  }
}

export default twoComponent;
