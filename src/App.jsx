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
import AddDetailsScreen from './Screens/AddDetailsScreen'
import MyProfileScreen from './Screens/MyProfileScreen'
import CollegeDetailsScreen from './Screens/CollegeDetailsScreen'
import AddProfessionScreen from './Screens/AdminScreens/AddProfessionScreen'
import ProfessionScreen from './Screens/ProfessionScreen'
import AddCollegeScreen from './Screens/AdminScreens/AddCollegeScreen'


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
            <Route path='/adddetails' element={<AddDetailsScreen />} />
            <Route path='/myprofile' element={<MyProfileScreen />} />
            <Route path='/college/:id' element={<CollegeDetailsScreen />} />
            <Route path='/profession' element={<ProfessionScreen/>} />
            <Route path='/admin/addprofession' element={<AddProfessionScreen/>} />
            <Route path='/admin/addcollege' element={<AddCollegeScreen/>} />
            <Route path='/admin/addcourses' element={<AddCollegeScreen/>} />
          </Routes>
          <Footer />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
