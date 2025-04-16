import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage.jsx';
import AboutPage from './pages/About.jsx';
import PostsPage from './pages/Posts.jsx';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
        <Route path='/posts' Component={PostsPage} />
      </Routes>
    </BrowserRouter>
  )
};