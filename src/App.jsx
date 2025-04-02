import { useState } from 'react'
import { Suspense } from 'react'
import Counter from './counter';
import Batsman from './batsman';
import Users from './Users';

import './App.css'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Suspense fallback={<h3>Loading</h3>}>
      <Users fetchUsers = {fetchUsers}> 

      </Users>
    </Suspense>
    <Batsman></Batsman>

    <Counter></Counter>

    </>
  )
}

export default App
