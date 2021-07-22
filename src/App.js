import './App.css';
import { Toolbar, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
  },
});
export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Toolbar />
      <Main />
      <Footer />
    </div>
  );
}
