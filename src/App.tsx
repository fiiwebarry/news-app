import { Routes, Route } from 'react-router-dom';
import ArticlePage from './pages/ArticlesPage';
import Home from './pages/Home';

export default function App() {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/article/:id' element={<ArticlePage />} />
      </Routes>
    </div>
  );
}
