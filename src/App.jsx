import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Screens/Login'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Signup from './Screens/Signup'
import HomeScreen from './Screens/HomeScreen'
import { UserContext } from './UserContext'

function App() {
  const [user,setUser]=useState(null);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{user,setUser}}>
        <div className='w-full App'>
          <Header />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/home' element={<HomeScreen />} />
          </Routes>
          <Footer />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
