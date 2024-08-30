import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { Navlinks } from '../components'
import {  useState } from "react";

import { userGlobal } from "../context/userContext";
import { useCartGlobalContext } from "../context/cartContext";


export default function Navbar() {


  const [isMenuOpen ,setIsMenuOpen ] = useState(false)

  const navigate = useNavigate()
  const { User} = userGlobal()
  const {NumberofCartitems } = useCartGlobalContext()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  
  
   function Logout(){

    localStorage.removeItem("token")
    localStorage.removeItem("name")

    navigate('/login')
   }
   
  return (
    <nav className=" bg-gray-100 px-4 py-2.5 dark:bg-gray-900">
        <div className="container  flex   flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center ">
          <i className="fa-solid fa-cart-shopping text-green-600 text-3xl"></i>
         <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">fresh cart</span>
        </a>
      
      
        <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className=" items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M3 5h14a1 1 0 110 2H3a1 1 0 010-2zM3 10h14a1 1 0 110 2H3a1 1 0 010-2zM3 15h14a1 1 0 110 2H3a1 1 0 010-2z" clip-rule="evenodd"></path>
          </svg>
       </button>

       <div className="hidden w-full md:flex md:w-auto " id="navbar-default">
        <ul className='flex flex-col lg:flex-row'>
              <li className='py-2'><NavLink className={'mx-2  text-lg text-slate-900 font-light'} to=''>Home</NavLink></li>
              <li className='py-2'><NavLink className={'mx-2  text-lg text-slate-900 font-light'} to='cart'>Cart</NavLink></li>
              <li className='py-2'><NavLink className={'mx-2  text-lg text-slate-900 font-light'} to='products'>Products</NavLink></li>
              <li className='py-2'><NavLink className={'mx-2  text-lg text-slate-900 font-light'} to='categories'>Categories</NavLink></li>
        </ul>
       </div>  
       <div className="hidden w-full md:flex md:w-auto " id="navbar-default">
        <ul className='flex flex-col lg:flex-row'>
              <li className='py-2 relative'>
              {User && <NavLink to='/cart' className=''>
                
                <i  className="fa-solid fa-cart-shopping text-3xl "></i>                
                  <span className=" flex justify-center  items-center  absolute  top-0 end-0 bg-green-700 text-white text-sm w-5 h-5 rounded-full">
                      {NumberofCartitems}
                  </span>

              
                </NavLink>}
              </li>
              <li className='py-2'><button onClick={Logout} className="ml-5 ">Logout</button>
              </li>
              
    </ul>
       </div> 
       </div> 
        
        {isMenuOpen ? (
          <div>
             <div className=" flex-col md:hidden " >
            <ul className='flex flex-col lg:flex-row'>
                  <li className='py-2'><NavLink className={'mx-2  text-lg text-slate-900 font-light'} to=''>Home</NavLink></li>
                  <li className='py-2'><NavLink className={'mx-2  text-lg text-slate-900 font-light'} to='cart'>Cart</NavLink></li>
                  <li className='py-2'><NavLink className={'mx-2  text-lg text-slate-900 font-light'} to='products'>Products</NavLink></li>
                  <li className='py-2'><NavLink className={'mx-2  text-lg text-slate-900 font-light'} to='categories'>Categories</NavLink></li>
            </ul>
              </div> 
              <div className=" flex-col md:hidden  " >
              <ul className='flex flex-col lg:flex-row'>
              <li className='py-2 relative'>
              {User && <NavLink to='/cart' className=''>
                
                <i  className="fa-solid fa-cart-shopping text-3xl "></i>                
                  <span className=" flex justify-center  items-center  absolute  top-0  bg-green-700 text-white text-sm w-5 h-5 rounded-full">
                      {NumberofCartitems}
                  </span>

              
                </NavLink>}
              </li>
              <li className='py-2'><button onClick={Logout} className="ml-5 ">Logout</button>
              </li>
              
    </ul>
             </div> 
          </div> 
           
        ): null}
    </nav>
  )
}