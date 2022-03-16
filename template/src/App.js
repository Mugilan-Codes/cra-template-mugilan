import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import HomePage from 'Pages/Home'
import AboutPage from 'Pages/About'
import LoginPage from 'Pages/Login'
import RegisterPage from 'Pages/Register.jsx'
import NavigationBar from 'Components/NavigationBar'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />

      <Container>
        <h1>Welcome to React Router!</h1>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='sign-in' element={<LoginPage />} />
          <Route path='sign-up' element={<RegisterPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
