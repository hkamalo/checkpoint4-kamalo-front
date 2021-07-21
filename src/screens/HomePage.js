import { React } from 'react';

export default function HomePage() {
  return (
    <div className="home">
      <div className="profil">
        <h2>Home</h2>
        <div className="profil-infos">profil</div>
      </div>
      <div className="instant-message">
        <input type="message" />
        <button type="submit">send</button>
      </div>
    </div>
  );
}
