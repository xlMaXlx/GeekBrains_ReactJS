import React from "react";

export class Message extends React.Component {
  constructor(props) {
    super(props);

    console.log("message constructor");
  }

  componentDidMount() {
    console.log("message did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("message did update");
  }

  componentWillUnmount() {
    console.log("message will unmount");
  }

  render() {
    console.log("message render");
    return (
      <>
        <div>This is a message component: {this.props.count}</div>
        <button onClick={this.props.updateCount}>UPDATE</button>
      </>
    );
  }
}
