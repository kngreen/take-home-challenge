import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import NavPage from 'components/pages/NavPage'
import ExplorePage from 'components/pages/ExplorePage'

import './assets/stylesheets/styles.scss'
import '../src/assets/webfonts/Nunito/Nunito-Black.ttf'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/explore' element={<ExplorePage/>}/>
        <Route path='/' element={<NavPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
