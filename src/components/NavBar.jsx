import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to='/'><button>Home Page</button></Link>
      <NavLink to='/about'><button>Chi siamo</button></NavLink>
      <NavLink to='/posts'><button>Lista Post</button></NavLink>
    </nav>
  );
};