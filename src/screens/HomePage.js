/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Chat from '../components/Chat';
import UserProfil from '../components/Profil';

const useStyles = makeStyles(() => ({
  home: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  profil: {
    margin: 10,
    padding: 10,
  },
}));

export default function HomePage() {
  const classes = useStyles();

  // get random users
  const [randomUser, setRandomUser] = useState(null);

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/')
      .then(({ data }) => setRandomUser(data.results));
  }, []);

  return (
    <div className={classes.home}>
      <div className={classes.profil}>
        {randomUser && <UserProfil user={randomUser} />}
      </div>
      {randomUser && <Chat user={randomUser} />}
    </div>
  );
}
