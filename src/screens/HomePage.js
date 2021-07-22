import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chat from '../components/Chat';

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
        <h2>Profil</h2>
        <div className="profil-infos">profil A</div>
        <p>lorem ipsum dolor sit amet, consectetur adip</p>
      </div>
      <Chat />
    </div>
  );
}
