import './App.css'
import Navbar from './Components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import TopSelling from './Components/TopSelling'
import TopRated from './Components/TopRated'
import Reviews from './Components/Reviews'
import Footer from './Components/Footer'
import Products from './Components/Product'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<div>
        <Navbar/>
        <Home/>
        <Footer/>
      </div>
    },
    {
      path:'/bestSellers',
      element:<div>
        <Navbar/>
        <TopSelling/>
        <Footer/>
      </div>
    },
    {
       path:'/products',
       element:<div>
        <Navbar/>
        <Products/>
        <Footer/>
      </div>
    },
    {
       path:'/topPicks',
      element:<div>
        <Navbar/>
        <TopRated/>
        <Footer/>
      </div>
    },
    {
      path:'/reviews',
      element:<div>
        <Navbar/>
        <Reviews/>
        <Footer/>
      </div>
    }
  ])
 return (
  <div>
    <RouterProvider router={router} >
      
    </RouterProvider>
  </div>
 )
}
export default App
