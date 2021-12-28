import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import './App.css';

function App() {
  return (
    <Container className='App'>
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
      </Routes>
    </Container>
  );
}

export default App;
