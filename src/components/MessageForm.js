export default function MessageForm({
  userName,
  setUserName,
  newMessageText,
  setNewMessageText,
  handleSubmit,
}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>New Message</h2>
        <input
          type="text"
          name="author"
          placeholder="username"
          value={userName}
          required
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          name="messageContent"
          placeholder="message"
          value={newMessageText}
          required
          onChange={(e) => setNewMessageText(e.target.value)}
        />
        <button type="submit">send</button>
      </form>
    </>
  );
}
