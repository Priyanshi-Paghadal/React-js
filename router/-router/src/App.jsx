import './App.css'
import Home from './components/Home'
import React  from 'react' 
import Navbar from './components/Navbar'
import Login from './components/Login'
import About from './components/About'
import User from './components/User'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
      {
        path : "/",
        element : <><Navbar/><Home/></>
      },
      {
        path : "/login",
        element: <><Navbar/><Login/></>
      },
      {
        path:"/about",
        element:<><Navbar/><About/></>
      },
      {
        path:"/home",
        element:<><Navbar/><Home/></>
      },
      {
        path:"/user/:username",
        element :<><Navbar/><User/></>
      }
  ])
  return (
    <>
      <div>Navigation</div>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
