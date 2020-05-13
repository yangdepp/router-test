import React, { Component } from 'react';
import Child from './child';
class Demo extends Component {
  submit() {
    console.log(this.child);
  }

  onGet = (ref) => {
    this.child = ref;
  };
  render() {
    return (
      <div>
        <Child onGet={this.onGet} />
        <button onClick={this.submit.bind(this)}>提交</button>
      </div>
    );
  }
}

export default Demo;
