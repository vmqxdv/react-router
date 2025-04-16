import './NavBar.css';

import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        <button>Home</button>
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
        <button>Chi Siamo</button>
      </NavLink>
      <NavLink to="/posts" className={({ isActive }) => (isActive ? 'active' : '')}>
        <button>Lista Post</button>
      </NavLink>
    </nav>
  );
}