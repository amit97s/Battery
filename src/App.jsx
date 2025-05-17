import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Home } from './Pages'

const App = () => {
  return (
    <Router>
      <div>
        <Home/>
      </div>
    </Router>
  )
}

export default App