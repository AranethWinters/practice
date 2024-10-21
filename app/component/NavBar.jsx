"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleNav = () => {
    setMenuOpen(!menuOpen)
  } 
  return (
   <nav className='fixed w-full h-10 shadow-xl bg-black'>
        <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
            <div></div>
            <div className='hidden sm:flex'>
              <ul className="hidden sm:flex">
                <Link href="/skills">
                <li className='ml-10 uppercase hover:border-b text-xl'>Skills</li>
                </Link>
                <Link href="/contact">
                <li className='ml-10 uppercase hover:border-b text-xl'>Contact Me</li>
                </Link>
              </ul>
            </div>
            <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'>
              <AiOutlineMenu size="25"/>
            </div>
        </div>
        <div className={
          menuOpen
          ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
          : "fixed left-[-100%] w-0 p-10 ease-in duration-500"
        }>
          <div className='flex w-full items-center justify-end'>
            <div onClick={handleNav} className='cursor-pointer text-black'>
              <AiOutlineClose size={25}/>
            </div>
          </div>
          <div className="flex-col py-4">
              <ul>
                <Link href="/">
                <li onClick={()=>setMenuOpen(false)} className='py-4 cursor-pointer text-black'>Home</li>
                </Link>
                <Link href="\skills">
                <li onClick={()=>setMenuOpen(false)} className='py-4 cursor-pointer text-black'>Skills</li>
                </Link>
                <Link href="/">
                <li onClick={()=>setMenuOpen(false)} className='py-4 cursor-pointer text-black'>Contact</li>
                </Link>
              </ul>
            </div>
        </div>
   </nav>
  )
}

export default NavBar
