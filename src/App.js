import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Work from './pages/Work/Work';
import Home from './pages/Home/Home';
import Resource from './pages/Resources/Resource';
import About from './pages/About/About';
import Nb from './pages/NBTEST/Nb';

function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/work' element={<Work />} />
      <Route path='/resources' element={<Resource />} />
      <Route path='/nb' element={<Nb />} />
      </Routes>
      
    </div>
  );
}

export default App;
