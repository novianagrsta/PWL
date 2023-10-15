import React, { useState, useContext } from 'react';

const MessageContext = React.createContext();

const StatefulComponent = () => {
 const [messageCount, setMessageCount] = useState(0);

 const incrementMessageCount = () => {
   setMessageCount(messageCount + 1);
 };

 return (
    <MessageContext.Provider value={{ messageCount, incrementMessageCount }}>
      <h2>Messages Sent: {messageCount}</h2>
    </MessageContext.Provider>
 );
};

export default StatefulComponent;