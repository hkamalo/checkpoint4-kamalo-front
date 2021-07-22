export default function LoginPage() {
  return (
    <>
      <h3>Login</h3>
      <form action="" method="post">
        <input
          autoComplete="username"
          placeholder="Enter your username"
          type="text"
        />
        <input
          autoComplete="password"
          placeholder="Enter your password"
          type="text"
        />
        <button type="submit">validate</button>
      </form>
    </>
  );
}
