import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';

export default function DefaultLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};