import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index'
import Signup from './pages/Signup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/:url" element={<Signup />} />
        <Route path="/" element={<Signup />} />
        {/* <Route path="/signinn" element={<h1>Hello</h1>} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </div>
  </Router>
  )
}

export default App
