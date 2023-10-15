import React from 'react';
import { useMessageContext } from '../context/MessageContext';

const MessageList = () => {
  const { messages } = useMessageContext();

  return (
    <div>
      <h2>Messages Sent: {messages.length}</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
