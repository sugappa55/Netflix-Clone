import React, { useState } from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import { requests } from '../endPoints'

const Home = () => {

  return (
    <div>
      <Main/>
      <Row rowId="1" title="Up Coming" Api={requests.requestUpcoming}/>
      <Row rowId="2" title="Popular" Api={requests.requestPopular}/>
      <Row rowId="3" title="Trending" Api={requests.requestTrending}/>
      <Row rowId="4" title="Top Rated" Api={requests.requestToprated}/>
      <Row rowId="5" title="Horror" Api={requests.requestHorror}/>
    </div> 
  )
}

export default Home
