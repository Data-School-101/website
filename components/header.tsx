import Link from 'next/link'
import React from 'react'


const Header: React.FC = () => {
  return (
    <header className='sticky bg-white shadow'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6'>
        <div className='text-xl font-bold'>The Data School</div>
        <nav>
          <ul className='flex space-x-6'>
            <li><Link className="text-gray-800" href='/'>About</Link></li>
            <li><Link className="text-gray-800" href="/events">Events</Link></li>
            <li><Link className="text-gray-800" href='/about'>Info</Link></li>
            <li><Link className="text-gray-800" href='contact'>Contact</Link></li>
          </ul>
        </nav>

        <div>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-full">Register Now</button>
        </div>
      </div>
    </header>
  )
}

export default Header