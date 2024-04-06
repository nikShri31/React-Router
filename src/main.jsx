
// First thing to do is [create a Browser Router] and configure our first route. 
//This will enable client side routing for our web app.

// importatnt for router:   **  After making nd set an <Outlet> -- Define its child elements by using this :
//                          **  <RouterProvider router ={router}/> 
//                          **  const router =  createBrowserRouter([])
//                          **  createRoutesFromElements( <Route> </Route> ) 
//    Routes are perhaps the most important part of a React Router app. They couple URL segments to components,
//  ** data loading (Loader) and data mutations. 
//       Through route nesting, complex application layouts and data dependencies become simple and declarative.
// ****** Some Imp Route Function =>> action 🆕 errorElement 🆕 loader 🆕 lazy 🆕




import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { gitInfoLoader } from './components/Github/Github.jsx'
import User from './components/user/User.jsx'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'





// ***   1st METHOD  ***//

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },                         ** Nested Routing
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

//** ### 2nd METHOD ###**//

//  **createRoutesFromElements is a helper that creates route objects from <Route> elements. 
//  **It's useful if you prefer to create your routes as JSX instead of OBJECTS.



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'   element= { <Layout /> } >
{/* Layout is parent element using Outlet and we Are defining its child elements below*/  }
      <Route path=''        element={<Home />} />
      <Route path='/About'   element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
{/* userid user ka child path h jiska access < User/> m milega  */}
      <Route path='github' 
             element={<Github />}
             loader={gitInfoLoader} /> 
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
