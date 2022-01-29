import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/Main';
import NewProduct from './pages/NewProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/add-product' element={<NewProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
