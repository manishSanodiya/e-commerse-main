import React from 'react'
import Header from '../components/header/Header'
import Generic from '../components/header/Generic'
import Tours from './Tours'
import Generic2 from '../components/header/Generic2'

const Home = () => {
  return (
    <div>
      <Header />
       <Generic />
       <Tours />
       <Generic2/>
    </div>
  )
}

export default Home
