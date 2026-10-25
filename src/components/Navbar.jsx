import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {

    const links = <>
           <nav className='flex justify-center gap-10 bg-transparent py-4'>
            <NavLink to={"/"} className={({isActive}) => `font-semibold mr-1 ${isActive? "text-green-500 border border-green-500" : ""}`}>HOME</NavLink>
           <NavLink to={"/feature"} className={({isActive}) => `font-semibold mr-1 ${isActive? "text-green-500 boder border-green-500" : ""}`}>FEATURES</NavLink>
           <NavLink to={"/documentaion"} className={({isActive}) => `font-semibold mr-1 ${isActive? "text-green-500 boder border-green-500" : ""}`}>DOCUMENTAION</NavLink>
           <NavLink to={"/login"} className={({isActive}) => `font-semibold mr-1 ${isActive ? "text-green-500 boder border-green-400" : ""}`}>LOGIN</NavLink>
           <NavLink to={"/register"} className={({isActive}) => `font-semibold mr-1 ${isActive ? "text-green-500 border border-green-500" : ""}`}>Register</NavLink>
           
           </nav>
    </>
    return (
        <div className="max-lg:collapse bg-base-200 lg:mb-48 shadow-sm w-full rounded-md">
            <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
            <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
            <div className="collapse-title navbar">
                <div className="navbar-start">
                    <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <button className="btn btn-ghost text-xl">STAR <span>UI</span></button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        
                        <li>
                                
                                {
                                    links
                                }
                        </li>
                        
                    </ul>
                </div>
                <div className="navbar-end">
                   <button className='bg-transparent text-indigo-600 border border-indigo-600 hover:text-green-400 px-4 py-4'>START FREE</button>
                </div>
            </div>

            <div className="collapse-content lg:hidden z-1">
                <ul className="menu">
                    
                    <li>
                        

                     {links}

                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Navbar
