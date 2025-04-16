import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/About.jsx';
import PostsPage from './pages/Posts.jsx';

import NavBar from './components/NavBar.jsx';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
          <Route path='/posts' Component={PostsPage} />
        </Routes>
      </BrowserRouter>
    </>
  )
};