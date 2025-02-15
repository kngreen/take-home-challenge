import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const ExplorePage = () => {

  const getEvents = () => {
    const events = axios.get('/v1/events');
    console.log(events)
  }

  useEffect(() => getEvents())

  const navigate = useNavigate()

  return (
    <div>
      <button className='Explore-back' onClick={() => navigate('/')}></button>
      <div className='Explore-body-main-nav'>
        <button className='Explore-body-main-nav-right'>This Week</button>
        <button className='Explore-body-main-nav-left'>Today</button>
      </div>
    </div>
  )
}

export default ExplorePage
