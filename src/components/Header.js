import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header>
        <nav className="navBar">
          <ul className="navList">
            <li className="navItem">
              <NavLink className="navLink" exact to="/login">
                Login
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink className="navLink" exact to="/home">
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
