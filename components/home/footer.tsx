import React from 'react'
import { Input } from '../ui/input'
import { Icon } from '../icons'
import Link from 'next/link'
import { Button } from '../ui/button'
import { EmailIcon } from '../icons/icons'


interface FooterSectionProps {
  title: string
  children: React.ReactNode
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => {
  return (
    <div>
      <h4 className='text-lg font-bold mb-4'>{title}</h4>
      {children}
    </div>
  )
}

const SubscribeButton: React.FC = () => {
  return (
    <button
      className="flex justify-center items-center w-10 h-10 bg-[#d9a197] focus:outline-none"
      style={{
        cursor: 'pointer',
        border: 'none',
        color: '#f8eafb',
      }}
    >
      <svg
        className="w-3.5 h-3.5 fill-current"
        viewBox="0 0 512 512"
        style={{ color: '#f8eafb' }}
      >
        <path d="M512 256c0-141.4-114.6-256-256-256S0 114.6 0 256c0 141.4 114.6 256 256 256S512 397.4 512 256zM265.9 382.8C259.9 380.3 256 374.5 256 368v-64H160c-17.67 0-32-14.33-32-32v-32c0-17.67 14.33-32 32-32h96v-64c0-6.469 3.891-12.31 9.875-14.78c5.984-2.484 12.86-1.109 17.44 3.469l112 112c6.248 6.248 6.248 16.38 0 22.62l-112 112C278.7 383.9 271.9 385.3 265.9 382.8z" />
      </svg>
    </button>
  );
};


const SubscribeForm: React.FC = () => {
  return (
    <div className="flex items-center bg-[#ede4e6] border-2 border-pink-300 rounded-lg">
      <Input
        type="text"
        placeholder="Enter your email"
        className="w-full h-10 px-2 bg-[#ede4e6] text-[#2c2c2c] text-base outline-none"
      />
      <SubscribeButton />
    </div>
  )
}

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-10 border-t-4 border-yellow-500">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">

        {/* About Us Section */}
        <FooterSection title="DataCraft Labs">
          <ul className="space-y-6">
            <li><a href="/about" className="hover:text-yellow-500">DataCraft Lab Information</a></li>
            <li><a href="/events" className="hover:text-yellow-500">Events</a></li>
            <li><a href="#" className="hover:text-yellow-500">Get Involved</a></li>
            <li><a href="#" className="hover:text-yellow-500">Legal</a></li>
          </ul>
        </FooterSection>

        {/* Connect with Us Section */}
        <FooterSection title="Connect with Us">
          <div className="flex items-center mb-4 mt-4">
            <EmailIcon />
            <a href="mailto:data.craftlab24@gmail.com" className="text-gray-700 hover:text-gray-900">
              data.craftlab24@gmail.com
            </a>
          </div>

          <div className="flex space-x-4 justify-center md:justify-start">
            <Button className='p-0' variant="link">
              <Link href="https://youtube.com/@datacraftlab24?si=K9pjHQYVR9WZbyoq" passHref>
                <Icon social="youtube" />
              </Link>
            </Button>
            {(["twitter", "facebook", "linkedin"] as const).map((media, key) => {
              return (
                <Button className='p-0' variant="link" key={key}>
                  <Icon social={media} />
                </Button>
              )
            })}
          </div>


        </FooterSection>

        {/* Subscribe Now Section */}
        <FooterSection title="Subscribe Now">
          <SubscribeForm />
        </FooterSection>

      </div>
    </footer>
  )
}

export default Footer