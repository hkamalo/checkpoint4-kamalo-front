/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MessageForm from './MessageForm';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chatbox: {
    width: '20em',
    height: '10em',
    overflowY: 'scroll',
    fontFamily: 'Tajawal, sans-serif',
  },
}));

export default function Chat() {
  const classes = useStyles();

  const [receivedMessages, setReceivedMessages] = useState([]);
  const [socketServer, setsocketServer] = useState(null);
  const [userName, setUserName] = useState('');
  const [newMessageText, setNewMessageText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    socketServer?.emit('messageFromClient', {
      text: newMessageText,
      author: userName,
    });
  };

  useEffect(() => {
    const socket = socketIOClient('http://localhost:3001');
    setsocketServer(socket);
  }, []);

  if (socketServer) {
    socketServer.on('MessageList', (messages) => {
      setReceivedMessages(messages);
    });
  }

  return (
    <>
      <div className="instant-message">
        <Paper className={classes.chatbox} elevation={3}>
          <ul>
            {receivedMessages &&
              receivedMessages.map((message) => (
                <li key={message.id}>
                  {message.author} : {message.text}
                </li>
              ))}
          </ul>
        </Paper>
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
