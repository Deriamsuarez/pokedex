import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import PokemonDetails from './pages/PokemonDetails'
import ProtetectedRoutes from './pages/ProtetectedRoutes'
import WelcomePage from './pages/WelcomePage'


function App() {

  return (
    <Routes>
      <Route path='/welcome' element={<WelcomePage />} />
      <Route element={<ProtetectedRoutes/>}>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon/:name' element={<PokemonDetails />} />
      </Route>
    </Routes>
  )
}

export default App
