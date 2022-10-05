import React from 'react'
import {useNavigate} from 'react-router-dom'

const CitySelectorBox = () => {
  const navigate = useNavigate()
  return (
    <div>
      {/* <video playsinline autoplay muted loop>
        <source src="../../assets/images/goldconfetti" type="video/webm"></source>
        Your browser does not support the video tag.
      </video> */}
      <h1 className='CitySelector-prompt'>WHERE ARE YOU LOOKING FOR EXPERIENCES?</h1>
      <div className='CitySelector-cities'>
        <button className='CitySelector-cities-button' onClick={() => navigate('/explore')}>
          <span>🗽</span>New York
        </button>
        <button className='CitySelector-cities-button'>
          <span>🌴</span>Miami
        </button>
        <button className='CitySelector-cities-button'>
          <span>☀️</span>Los Angeles
        </button>
        <button className='CitySelector-cities-button-teal'>
          <span>📍</span>Near Me
        </button>
      </div>
    </div>
  )
}

export default CitySelectorBox
