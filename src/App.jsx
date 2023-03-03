import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CreateUser from './CreateUser'
import User from "./User"
import Home from './Home'
import Edit from "./Edit"

const App = () => {
  return (
    <BrowserRouter>
    <Home></Home>

    <Routes>

        <Route path="/createuser" element={<CreateUser></CreateUser>}></Route>
        <Route path="/users" element={<User></User>}></Route>
        <Route path="/edituser/:index" element={<Edit></Edit>}></Route>
        
    </Routes>
    </BrowserRouter>
   
  )
}

export default App