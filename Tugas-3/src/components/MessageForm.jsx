import React, { useState } from 'react';
import { useMessageContext } from '../context/MessageContext';

const MessageForm = () => {
  const [message, setMessage] = useState('');
  const { addMessage } = useMessageContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageForm;
