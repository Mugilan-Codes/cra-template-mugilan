import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import HomePage from 'Pages/Home';
import AboutPage from 'Pages/About';
import NavigationBar from 'Components/NavigationBar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />

      <Container>
        <h1>Welcome to React Router!</h1>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
