import { useState } from 'react'
import reactlogo from './assets/react.svg'
import './App.css'
import Card from './components/card'
import './components/card.css'
import './components/card.jsx'
import CounterApp from './components/CounterApp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
     <CounterApp/>
    </div>
</>
  )
}

export default App
