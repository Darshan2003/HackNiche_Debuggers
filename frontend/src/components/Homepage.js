import React from 'react'
import Header from './Header'
import Trending1 from '../components/Trending/Trending1'
import Trending2 from '../components/Trending/Trending2'
import Trending from './Trending'

function Homepage() {

  return (
    <div style={{ fontFamily: 'Light' }}>

      <Header />
      <Trending1 />
      <Trending2 />

    </div>
  )
}

export default Homepage