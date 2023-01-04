import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Screens/Login'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
   <div className='w-full App'>
    <Header/>
    <Routes>
      <Route path='/' element={<Login/>}/>
    </Routes>
    <Footer/>
    </div>
   </BrowserRouter>
  )
}

export default App
