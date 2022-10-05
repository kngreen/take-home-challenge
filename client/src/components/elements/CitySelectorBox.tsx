import React from 'react'

const CitySelectorBox = () => {
  return (
    <div className='CitySelector'>
      <h1 className='CitySelector-prompt'>WHERE ARE YOU LOOKING FOR EXPERIENCES?</h1>
      <div className='CitySelector-cities'>
        <div className='gold'>
          <button onClick={() => console.log('click!')}>New York</button>
        </div>
        <div className='gold'>
          <button>Miami</button>
        </div>
        <div className='gold'>
          <button>Los Angeles</button>
        </div>
        <div>
          <button>Near Me</button>
        </div>
      </div>
    </div>
  )
}

export default CitySelectorBox
