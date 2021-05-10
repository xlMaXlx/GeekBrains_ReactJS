import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Form } from "./components/Form";
import { AUTHORS } from "./utils/constants";
import { usePrev } from "./utils/hooks";

const initialMessages = [
  { author: AUTHORS.HUMAN, text: "Hello" },
  { author: AUTHORS.BOT, text: "Hello, what is your problem?" },
];

const getMessageClassName = (author) => {
  return `message ${author === AUTHORS.BOT ? "bot-message" : "human-message"}`;
};

const App = (props) => {
  const { data } = props;
  const [messages, setMessages] = useState(initialMessages);
  const [showForm, setShowForm] = useState(true);

  const filteredData = useMemo(() => data.filter((el) => el > 10), [data]);

  const handleAddMessage = useCallback((newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  }, []);

  const prevLength = usePrev(messages.length);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    let timeout;
    console.log(messages.length, prevLength);
    if (!messages.length) {
      return;
    }

    const lastMessage = messages[messages.length - 1];
    if (lastMessage.author === AUTHORS.HUMAN) {
      timeout = setTimeout(() => {
        handleAddMessage({ author: AUTHORS.BOT, text: "I am bot, please contact human support agent" });
      }, 50);
    }

    return () => clearTimeout(timeout);
  }, [messages]);

  return (
    <div>
      {messages.map((message, i) => (
        <div key={i} className={getMessageClassName(message.author)}>
          {message.author}: {message.text}
        </div>
      ))}
      <button onClick={toggleForm}>Hide/Show</button>
      {showForm && <Form onAddMessage={handleAddMessage} />}
    </div>
  );
};

export default App;
