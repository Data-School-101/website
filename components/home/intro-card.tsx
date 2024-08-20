import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Section from '../section'

const defaultProps = {
  imageUrl: 'https://assets.api.uizard.io/api/cdn/stream/f3f59566-013a-4b2b-a359-188b24a4841c.png'
}


export const IntroSection: React.FC = () => {
  return (
    <Section>
      <div className="relative h-screen w-full flex items-center justify-center">
        <div className="relative z-10 w-[434px]">
          <Card className="bg-white bg-opacity-30 p-8 rounded-lg shadow-lg">
            <CardHeader>
              <CardTitle className="text-4xl font-bold">
                THE DATA SCHOOL PLATFORM
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mt-4">
                Event Schedule<br />
                MON - FRI, 9 AM - 5 PM<br />
                Today&apos;s Events<br />
                9 AM - 5 PM
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="relative right-14 transform w-[512px] h-[512px] z-0">
          <Card className="w-full h-full bg-center bg-cover bg-no-repeat shadow-xl"
            style={{ backgroundImage: `url(${defaultProps.imageUrl})` }}>
          </Card>
        </div>
      </div>
    </Section>
  )
}


