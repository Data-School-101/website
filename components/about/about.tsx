import React from 'react'
import { Card } from '@/components/ui/card'
import IconComponent from './icon'
import TextComponent from './text'
import Section from '../section'
import { approach } from './approach'


const AboutUs: React.FC = () => {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center w-full px-4 py-8 gap-24">
        {/* Main Card */}
        <div className="w-full max-w-screen-md p-8 bg-gray-50">
          <div className="text-center mb-8">
            <TextComponent text="About Us" fontSize="3rem" fontWeight={700} lineHeight="3rem" />
            <TextComponent
              text="Statistics and data play a crucial role in the development, economic growth, and policymaking of every country. Employing the right methods and technologies for data collection, visualization, analysis, and interpretation is essential for leveraging data effectively."
              fontSize="1.25rem"
              fontWeight={400}
              lineHeight="2rem"
            />
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between w-full max-w-screen-lg gap-8">
          <div className="md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              The DataCraft Lab is designed to integrate statistics, mathematics, visualization, computing, software development, and domain expertise to derive insights from diverse data sources, including numerical, text, audio, and visual information. Our lab is committed to fostering academic and research excellence through high-quality training programs and an innovative research environment.
            </p>
          </div>
          <div className="flex justify-center md:w-1/2">
            <img src='https://assets.api.uizard.io/api/cdn/stream/1c1a53d6-c6d0-4640-8caf-07f4807481f1.png' alt="Our Mission" className="rounded-lg shadow-lg max-w-full" />
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="mt-16 w-full max-w-screen-lg px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approach.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <IconComponent
                  pathData={item.iconPath}
                  style={{ fontSize: '2rem', width: '2rem', height: '2rem' }}
                />
                <h3 className="text-xl font-bold mt-4">{item.title}</h3>
                <p className="text-gray-700 mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Opportunities Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between w-full max-w-screen-lg gap-8 px-4">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Opportunities</h2>
            <p className="text-gray-700">
              By providing these resources and opportunities, the dataCraft Lab aims to enhance data science capabilities and drive impactful innovations across various fields. We offer internships and practical experience, support product development initiatives, and more.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src='https://assets.api.uizard.io/api/cdn/stream/a82d195e-966b-424f-b21f-b63b4cf011b0.png' alt="Collaborative Work" className="rounded-lg shadow-lg w-full max-w-md" />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AboutUs
