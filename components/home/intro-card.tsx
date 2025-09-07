'use client'
import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Section from '../section'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const defaultProps = {
  imageUrl: 'https://assets.api.uizard.io/api/cdn/stream/f3f59566-013a-4b2b-a359-188b24a4841c.png',
}

export const IntroSection: React.FC = () => {
  const [text] = useTypewriter({
    words: ['DATACRAFT LABS', 'YOUR GATEWAY TO ADVANCED ANALYTICS', 'LEARN FROM INDUSTRY EXPERTS'],
    loop: 0, // Infinite loop
    delaySpeed: 6000,
  })

  return (
    <Section>
      <div className="relative min-h-screen w-full flex flex-col lg:flex-row items-center justify-center">
        <div className="relative z-20 w-full lg:w-[28rem] px-4 lg:px-0">
          <Card className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 p-8 rounded-lg shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl lg:text-4xl font-bold text-center text-white">
                <span>{text}</span>
                <Cursor cursorColor="#FA0F00" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mt-4 text-center text-white text-sm lg:text-base">
                Event Schedule<br />
                MON - FRI, 9 AM - 5 PM<br />
                Today&apos;s Events<br />
                9 AM - 5 PM
              </p>
            </CardContent>
            <CardFooter className="flex justify-center mt-4">
              <Button className='hover:bg-blue-500' variant="outline">Join Now</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="relative mt-8 lg:mt-0 lg:right-14 transform w-full h-[20rem] lg:w-[35rem] lg:h-[35rem] z-0">
          <Card
            className="w-full h-full bg-center bg-cover bg-no-repeat shadow-xl rounded-lg"
            style={{ backgroundImage: `url(${defaultProps.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
          </Card>
        </div>
      </div>
    </Section>
  )
}
