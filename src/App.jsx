import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/About.jsx';
import PostsPage from './pages/Posts.jsx';
import Post from './pages/Post.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='posts' element={<PostsPage />} />
          <Route path='posts/:id' element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}