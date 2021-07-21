import { React } from 'react';
import Chat from '../components/Chat';

export default function HomePage() {
  return (
    <div className="home">
      <div className="profil">
        <h2>Home</h2>
        <div className="profil-infos">profil</div>
      </div>
      <Chat />
    </div>
  );
}
