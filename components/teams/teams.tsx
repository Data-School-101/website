import React from 'react'
import Link from 'next/link'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { teamMembers } from './data'

const TeamsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Meet Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <Link href={member.linkedinUrl} key={member.name} target="_blank" rel="noopener noreferrer">
            <Card className="hover:shadow-xl shadow-sm transition-shadow cursor-pointer">
              <CardHeader className="flex flex-col items-center">
                <Avatar className="mb-4 w-36 h-36">
                  <AvatarImage
                    src={member.imageSrc}
                    alt={member.name}
                    className="rounded-full border-2 border-blue-500"
                  />
                  <AvatarFallback className='w-36 h-36'>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-center">{member.name}</CardTitle>
                <CardDescription className="text-center text-gray-600">{member.title}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">{member.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TeamsPage
