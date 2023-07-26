import React from 'react'
import List from '../list'
import { data } from '../../Staticdata/data'
import { useState } from 'react'
const Home = () => {
    const[people,setPeople]=useState(data)
  return (
    <div>
     <main>
    <section className='container'>
    <h3>{people.length} Birthday today</h3>
<List people={people}/>
    <button onClick={() => setPeople([])}>Clear all</button>

    </section>
     </main>
    </div>
  )
}

export default Home
