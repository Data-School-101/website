import React from 'react'
import Section from '../section'

interface ImageProps {
  image?: string
}

const DiscoverImage: React.FC<ImageProps> = ({ image }) => {
  const defaultImage = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxEYXRhJTJDJTIwQW5hbHlzaXMlMkMlMjBHcmFwaHxlbnwxfHx8fDE3MjM3OTA4MTB8MA&ixlib=rb-4.0.3&q=80&w=1080'

  return (
    <div
      className="w-full h-64 sm:w-[548px] sm:h-[477px] rounded-[22px] bg-center bg-cover bg-no-repeat mt-6 sm:mt-0"
      style={{ backgroundImage: `url(${image || defaultImage})` }}
    />
  )
}

export const Discover: React.FC = () => {
  return (
    <Section>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between">
        <div className="w-full md:w-[55%] lg:w-[50%] text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Discover statistical insights from experts
          </h2>
          <p className="text-gray-700 mb-6">
            Welcome to The Data School, a comprehensive platform for Advanced Analytics.
            Dive into a world of statistical insights and expert analyses, providing with trainings and opportunities to all.
            Explore a variety of events and
            resources designed to enhance your experience and professional development. Join us in shaping
            the future of statistical education. Discover the latest trends and methodologies in the field of <span className='font-bold'>
              Statistics</span>, <span className='font-bold'>Bio-Statistics</span>, <span className='font-bold'>Data Science</span>,
            and connect with like-minded professionals to exchange knowledge and ideas.
          </p>
        </div>
        <div className="w-full md:w-[45%] lg:w-[50%]  md:mb-5 flex justify-center md:justify-center">
          <DiscoverImage />
        </div>
      </div>
    </Section>
  )
}