import React, { Component } from 'react';

class child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    this.props.onGet(this);
  }

  getValue() {
    const { value } = this.state;
    return value;
  }

  change(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.state.value} onChange={this.change.bind(this)} />
        </div>
      </div>
    );
  }
}

export default child;
