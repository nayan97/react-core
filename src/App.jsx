import { useState } from 'react'
import Counter from './counter';
import Batsman from './batsman';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Batsman></Batsman>

    <Counter></Counter>

    </>
  )
}

export default App
