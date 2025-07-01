import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets_frontend/assets';

const Navbar = () => {

    const navigation = useNavigate();
    const [token, setToken] = useState(true);
    const [showMenu, setShowMenu] = useState(true);

    return (
        <nav className='flex items-center justify-between text-sm py-4 mb-4 border-b border-gray-300'>
            <img src={assets.DA_logo} className='w-44 cursor-pointer' alt="logo" />
            <ul className='flex items-center justify-center gap-5 font-medium'>
                <NavLink to="/">
                    <li className='py-1'>HOME</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to="/doctors">
                    <li className='py-1'>ALL DOCTORS</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to="/about">
                    <li className='py-1'>ABOUT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to="/contact">
                    <li className='py-1'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>
            {
                token
                    ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                        <img className='w-8 rounded-full' src={assets.profile_pic} alt="profile" />
                        <img className='w-2.5' src={assets.dropdown_icon} alt="profile" />
                        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 mt-3'>
                                <p onClick={() => navigation("/my-profile")} className='hover:text-black cursor-pointer'>My Profile</p>
                                <p onClick={() => navigation("/my-appointments")} className='hover:text-black cursor-pointer'>My Appointments</p>
                                <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                            </div>
                        </div>
                    </div>
                    : <div className='flex items-center gap-4'>
                        <button onClick={() => navigation("/login")} className='bg-green-600 text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer'>Create Account</button>
                    </div>
            }
        </nav>
    )
}

export default Navbar