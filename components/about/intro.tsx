import React from 'react'
import Card from './card'
import IconComponent from './icon'
import TextComponent from './text'
import Section from '../section'

const AboutUs: React.FC = () => {
  return (
    <Section>
      <div className=" items-center justify-center">
        <Card>
          <div className="text-center">
            <TextComponent text="About Us" fontSize="3rem" fontWeight={700} lineHeight="3rem" />
            <TextComponent
              text="Statistics and data play a crucial role in the development, economic growth, and policymaking of every country. Employing the right methods and technologies for data collection, visualization, analysis, and interpretation is essential for leveraging data effectively."
              fontSize="1.25rem" // 20px / 16
              fontWeight={400}
              lineHeight="2rem" // 32px / 16
            />
          </div>
        </Card>

        {/* Our Mission Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between w-full max-w-screen-lg">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              The dataCraft Lab is designed to integrate statistics, mathematics, visualization, computing, software development, and domain expertise to derive insights from diverse data sources, including numerical, text, audio, and visual information. Our lab is committed to fostering academic and research excellence through high-quality training programs and an innovative research environment.
            </p>
          </div>
          <div className="flex justify-center mt-8 md:mt-0">
            <img src='https://assets.api.uizard.io/api/cdn/stream/1c1a53d6-c6d0-4640-8caf-07f4807481f1.png' />
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="mt-16 w-full max-w-screen-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center">
              <IconComponent
                pathData="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"
                style={{ fontSize: '2rem', width: '2rem', height: '2rem' }}
              />
              <h3 className="text-xl font-bold mt-4">Expert Support</h3>
              <p className="text-gray-700">
                Providing expert support in areas such as operations research, finance, actuarial science, biostatistics, predictive analysis, data analytics, forecasting, and statistical data analysis methodologies and software.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <IconComponent
                pathData="M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z"
                style={{ fontSize: '2rem', width: '2rem', height: '2rem' }}
              />
              <h3 className="text-xl font-bold mt-4">Reliable Outputs</h3>
              <p className="text-gray-700">
                Producing reliable, refined outputs through rigorous analysis.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <IconComponent
                pathData="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"
                style={{ fontSize: '2rem', width: '2rem', height: '2rem' }}
              />
              <h3 className="text-xl font-bold mt-4">Engaging Tools</h3>
              <p className="text-gray-700">
                Developing user-friendly, visually engaging, and methodologically robust tools that utilize publicly available data and are accessible to all sectors of society.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <IconComponent
                pathData="M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z"
                style={{ fontSize: '2rem', width: '2rem', height: '2rem' }}
              />
              <h3 className="text-xl font-bold mt-4">Collaborative Innovation</h3>
              <p className="text-gray-700">
                Facilitating collaborative data warehousing and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Opportunities Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between w-full max-w-screen-lg">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Opportunities</h2>
            <p className="text-gray-700">
              By providing these resources and opportunities, the dataCraft Lab aims to enhance data science capabilities and drive impactful innovations across various fields. We offer internships and practical experience, support product development initiatives, and more.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img src='https://assets.api.uizard.io/api/cdn/stream/a82d195e-966b-424f-b21f-b63b4cf011b0.png' alt="Collaborative Work" className="rounded-lg shadow-lg w-full max-w-md" />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AboutUs
