/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

export default function Chat() {
  const [messages, setMessages] = useState('');

  useEffect(() => {
    const socket = socketIOClient('http://localhost:3001');
    setMessages(socket);
  }, []);

  return (
    <>
      <div className="instant-message">
        <div className="messages">messages</div>
        <input type="message" />
        <button type="submit">send</button>
      </div>
    </>
  );
}
