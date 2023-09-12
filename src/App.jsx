import './App.css'
import Register from './Register';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
