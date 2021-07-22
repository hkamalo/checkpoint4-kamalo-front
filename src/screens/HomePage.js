import { React } from 'react';
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

  return (
    <div className={classes.home}>
      <div className={classes.profil}>
        <UserProfil />
      </div>
      <Chat />
    </div>
  );
}
