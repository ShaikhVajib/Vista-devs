import './App.css'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Services from './Pages/Services.jsx'
import About from './Pages/About.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:  <><Header/> <Home/> < Footer/></>
    },
    {
      path:"/about",
      element: <><Header/> <About/> < Footer/></>
    },
    {
      path:"/services",
      element: <><Header/> <Services/> < Footer/></>
    },
    {
      path:"/contact",
      element: <><Header/> <Contact/> < Footer/></>
    }

  ])

  return (
    <> 
    <RouterProvider router={router} />   
    </>
  )
}

export default App
