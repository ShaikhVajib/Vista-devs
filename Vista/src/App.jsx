import './App.css'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Services from './Pages/Services.jsx'
import About from './Pages/About.jsx'
import Error from './Pages/Error.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageNotFound from './Pages/PageNotFound.jsx'

function App() {
  const router = createBrowserRouter([
    
    {
      path:"/",
      element: <><Header /><Home/><Footer/></>,
      errorElement: <Error/>
    },
    {
      path:"/about",
      element:  <><Header /><About/><Footer/></>
    },
    {
      path:"/services",
      element:  <><Header /><Services/><Footer/></>
    },
    {
      path:"/contact",
      element: <><Header/> <Contact/> < Footer/></>
    },
    {
      path:"*",
      element: <PageNotFound/>
    }
  ])

  return (
    <>
      
      <RouterProvider router={router}/>
 
    </>
  );
}

export default App
