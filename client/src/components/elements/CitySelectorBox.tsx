import React from 'react'

const CitySelectorBox = () => {
  return (
    <div>
      <h1 className='CitySelector-prompt'>WHERE ARE YOU LOOKING FOR EXPERIENCES?</h1>
      <div className='CitySelector-cities'>
        <button className='CitySelector-cities-gold'><span>🗽</span>New York</button>
        <button className='CitySelector-cities-gold'><span>🌴</span>Miami</button>
        <button className='CitySelector-cities-gold'><span>☀️</span>Los Angeles</button>
        <button className='CitySelector-cities-teal'><span>📍</span>Near Me</button>
      </div>
    </div>
  )
}

export default CitySelectorBox
