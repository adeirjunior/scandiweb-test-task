import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Main from './pages/Main';
import NewProduct from './pages/NewProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/add-product' element={<NewProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
