import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main">
      <h1>Student record</h1>
    <h3> Student name:kartik</h3>
    <h3> Student roll no: 123</h3>
    </div>
  )
}

export default App
