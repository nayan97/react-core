import { useState } from 'react'
import { Suspense } from 'react'
import Counter from './counter';
import Friends from './friends';
import Batsman from './batsman';
import Users from './Users';

import './App.css'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());

const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function App() {
  const [count, setCount] = useState(0)
  const friendsPromise = fetchFriends()

  return (
    <>
    <Suspense fallback={<h3>Loading</h3>}>
      <Users fetchUsers = {fetchUsers}> 

      </Users>
    </Suspense>
    <Suspense fallback={<h3>Loading</h3>}>
      <Friends friendsPromise = {friendsPromise}> 

      </Friends>
    </Suspense>
    <Batsman></Batsman>

    <Counter></Counter>

    </>
  )
}

export default App
