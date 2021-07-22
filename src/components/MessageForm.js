import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
  form: {
    maxWidth: '20em',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

export default function MessageForm({
  userName,
  setUserName,
  newMessageText,
  setNewMessageText,
  handleSubmit,
}) {
  const classes = useStyles();
  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="author"
          label="username"
          value={userName}
          size="small"
          required
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          type="text"
          name="messageContent"
          placeholder="message"
          variant="outlined"
          value={newMessageText}
          multiline
          maxRows={4}
          required
          onChange={(e) => setNewMessageText(e.target.value)}
        />
        <Button type="submit" color="primary">
          Send
        </Button>
      </form>
    </>
  );
}
