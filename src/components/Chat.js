/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

export default function Chat() {
  const [receivedMessages, setReceivedMessages] = useState('');
  const [socketServer, setsocketServer] = useState();

  useEffect(() => {
    const socket = socketIOClient('http://localhost:3001');
    setsocketServer(socket);
    // get the message list
  }, []);

  if (socketServer) {
    socketServer.on('initialMessageList', (messages) => {
      console.log(messages);
      setReceivedMessages(messages);
    });
  }
  return (
    <>
      <div className="instant-message">
        <div className="messages">
          <ul>
            {receivedMessages &&
              receivedMessages.map((message) => (
                <li>
                  {message.author} : {message.text}
                </li>
              ))}
          </ul>
        </div>
        <input type="message" />
        <button type="submit">send</button>
      </div>
    </>
  );
}
