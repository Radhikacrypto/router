import React from 'react'
import ReactDOM from 'react-dom/client'
import {  Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import App from './App.jsx'
import './index.css'
import Github from './components/github/Github.jsx'

// const route=createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children:{
//       path:"",
//       element:<Home/>
//     }

//   }
// ])

const routes=createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path='user/:userID' element={<User/>}/>
    <Route path="git" element={<Github/>}/>
    
  </Route>
)

const route=createBrowserRouter(routes)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={route}/>
  </React.StrictMode>,
)
