import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { About, ContactUs, Help, Home } from './Pages'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { Footer, Header } from './components'

const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
          <Route path='/help' element={<Help/>}/>
          <Route path='/log-in' element={<Login/>}/>
          <Route path='/sign-up' element={<Signup/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App