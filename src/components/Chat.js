/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import MessageForm from './MessageForm';

export default function Chat() {
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [socketServer, setsocketServer] = useState(null);
  const [userName, setUserName] = useState('');
  const [newMessageText, setNewMessageText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const socket = socketIOClient('http://localhost:3001');
    setsocketServer(socket);
  }, []);

  if (socketServer) {
    socketServer.on('initialMessageList', (messages) => {
      console.log(messages);
      setReceivedMessages(messages);
    });
    socketServer.emit('messageFromClient', {
      text: newMessageText,
      author: userName,
    });
  }

  return (
    <>
      <div className="instant-message">
        <div className="chat-box">
          <ul>
            {receivedMessages &&
              receivedMessages.map((message) => (
                <li key={message.id}>
                  {message.author} : {message.text}
                </li>
              ))}
          </ul>
        </div>
        <MessageForm
          userName={userName}
          setUserName={setUserName}
          newMessageText={newMessageText}
          setNewMessageText={setNewMessageText}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
