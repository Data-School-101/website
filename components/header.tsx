"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons' // Radix icons

import { Home } from './icons'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 bg-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-xl font-bold flex items-center">
          <Home />
          <span className="ml-2">The Data School</span>
        </Link>
        <nav className="hidden lg:flex space-x-6">
          <ul className="flex space-x-6">
            <li><Link className="text-gray-800" href='/'>About</Link></li>
            <li><Link className="text-gray-800" href="/events">Events</Link></li>
            <li><Link className="text-gray-800" href='/about'>Info</Link></li>
            <li><Link className="text-gray-800" href='contact'>Contact</Link></li>
          </ul>
        </nav>
        <div className="hidden lg:block">
          <button className="px-4 py-2 bg-purple-600 text-white rounded-full">Register Now</button>
        </div>
        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-800">
            {isMenuOpen ? <Cross1Icon width={24} height={24} /> : <HamburgerMenuIcon width={24} height={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            <li><Link className="text-gray-800" href='/' onClick={toggleMenu}>About</Link></li>
            <li><Link className="text-gray-800" href="/events" onClick={toggleMenu}>Events</Link></li>
            <li><Link className="text-gray-800" href='/about' onClick={toggleMenu}>Info</Link></li>
            <li><Link className="text-gray-800" href='/contact' onClick={toggleMenu}>Contact</Link></li>
            <li>
              {isMenuOpen ?
                (<Link className="text-gray-800" href='/register' onClick={toggleMenu}>Register Now </Link>) :
                (<button className="w-full px-4 py-2 bg-purple-600 text-white rounded-full" onClick={toggleMenu}>Register Now</button>)}
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
