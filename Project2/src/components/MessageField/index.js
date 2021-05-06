import React, { useEffect, useState } from "react";

import { Message } from "../Message";

export class MessageField extends React.Component {
  constructor(props) {
    super(props);

    console.log("messageField constructor");

    this.state = {
      count: 0,
      showMessage: true,
    };
  }

  componentDidMount() {
    console.log("messageField did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("messageField did update");
  }

  componentWillUnmount() {
    console.log("messageField will unmount");
  }

  toggleMessageField = () => {
    this.setState(prevState => ({
      showMessage: !prevState.showMessage,
    }));
  }

  render() {
    console.log("messageField render");
    const { showMessage } = this.state;
    // const showMessage = this.state.showMessage;
    return (
      <div>
        <span>This is a messageField component</span>
        <button onClick={this.toggleMessage}>Toggle message</button>
        {showMessage && <Message />}
      </div>
    );
  }
}

export const MessageField = () => {
  console.log('render MessageField');
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log('useEffect like didMount');
  }, []);

  useEffect(() => {
    console.log('useEffect - like didMount & didUpdate');
  });

  useEffect(() => {
    console.log('useEffect - first render OR count changed');
  }, [count]);

  useEffect(() => {
    console.log("useEffect - first render OR count2 changed");
  }, [count2]);

  const updateCount = () => {
    debugger;
    setCount(Math.random());
  };

  const updateCount2 = () => {
    setCount2(Math.random());
  };

  return (
    <div>
      <span>This is a messageField component</span>
      {/* <button onClick={updateCount}>Update count</button>
      <button onClick={updateCount2}>Update count2</button> */}
      {/* <button onClick={this.toggleMessage}>Toggle Message</button> */}
      <Message count={count} updateCount={updateCount} />
    </div>
  );
}
