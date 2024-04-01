import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Category from './pages/Category';
import MealItem from './pages/meal/MealItem';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className='container content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:name' element={<Category />} />
            <Route path='/meal/:id' element={<MealItem />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
