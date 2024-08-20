'use client'
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Section from '../section';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const defaultProps = {
  imageUrl: 'https://assets.api.uizard.io/api/cdn/stream/f3f59566-013a-4b2b-a359-188b24a4841c.png',
};

export const IntroSection: React.FC = () => {
  const [text] = useTypewriter({
    words: ['THE DATA SCHOOL PLATFORM', 'YOUR GATEWAY TO ADVANCED ANALYTICS', 'LEARN FROM INDUSTRY EXPERTS'],
    loop: 0, // Infinite loop
    delaySpeed: 3000,
  });

  return (
    <Section>
      <div className="relative h-screen w-full flex items-center justify-center ">
        {/* <div className="absolute inset-0 bg-black opacity-20 z-0"></div> */}
        <div className="relative z-10 w-[434px]">
          <Card className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 p-8 rounded-lg shadow-lg">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-center">
                <span>{text}</span>
                <Cursor cursorColor="#FA0F00" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mt-4 text-center text-gray-800">
                Event Schedule<br />
                MON - FRI, 9 AM - 5 PM<br />
                Today&apos;s Events<br />
                9 AM - 5 PM
              </p>
            </CardContent>
            <CardFooter className="flex justify-center mt-4">
              <Button variant="primary">Join Now</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="relative right-14 transform w-[512px] h-[512px] z-0">
          <Card
            className="w-full h-full bg-center bg-cover bg-no-repeat shadow-xl rounded-lg"
            style={{ backgroundImage: `url(${defaultProps.imageUrl})` }}
          >
            <div className="absolute inset-0 transparent opacity-20 rounded-lg"></div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

