'use client'

import React from 'react'
import Section from '../section'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

interface ImageProps {
  image?: string
}

const DiscoverImage: React.FC<ImageProps> = ({ image }) => {
  const defaultImage =
    'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxNDB8fGdyYXBoc3xlbnwxfHx8fDE3MjQ5NDI5MTB8MA&ixlib=rb-4.0.3&q=80&w=1080'

  return (
    <div
      className="w-full h-64 sm:w-[548px] sm:h-[477px] rounded-[22px] bg-center bg-cover bg-no-repeat mt-6 sm:mt-0"
      style={{ backgroundImage: `url(${image || defaultImage})` }}
    />
  )
}

export const Discover: React.FC = () => {

  const [text] = useTypewriter({
    words: ['Discover Statistical Insights from Experts'],
    loop: 0, // Infinite loop
    delaySpeed: 6000,
  })

  return (
    <Section className=''>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between">
        <div className="w-full md:w-[55%] lg:w-[50%] text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            {text}
            <Cursor cursorColor="" />
          </h2>
          <p className="text-gray-700 mb-6">
            Welcome to The <span className='font-bold'> DataCraft Lab</span>, a comprehensive platform for Advanced Analytics.
            Dive into a world of statistical insights and expert analyses, providing trainings and opportunities to all.
            Explore a variety of events and
            resources designed to enhance your experience and professional development. Join us in shaping
            the future of statistical education. Discover the latest trends and methodologies in the field of <span className='font-bold'>
              Statistics</span>, <span className='font-bold'>Biostatistics</span>, <span className='font-bold'>Financial Engineering</span>, <span className='font-bold'>Data Science</span>, <span className='font-bold'>Actuarial Science,</span>
            <span className='font-bold'> Operations  Research</span>, and connect with like-minded professionals to exchange knowledge and ideas.
          </p>
        </div>
        <div className="w-full md:w-[50%] lg:w-[50%] hidden md:flex justify-center md:justify-center">
          <DiscoverImage />
        </div>
      </div>
    </Section>
  )
}

