import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Section from '../section'

export const Events: React.FC = () => {
  return (
    <Section className="py-10 px-6 bg-white">
      <h2 className="text-center text-3xl font-bold mb-8">This week&apos;s events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <EventCard
          image="https://images.unsplash.com/photo-1507208773393-40d9fc670acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw1fHxOdW1iZXJzJTJDJTIwQ2xhc3Nyb29tJTJDJTIwTGFwdG9wfGVufDF8fHx8MTcyMzc5MDgxMHww&ixlib=rb-4.0.3&q=80&w=1080"
          title="Data-driven Decisions"
          description="Data-driven Decisions is a series of events focusing on the importance of statistical analysis in making informed choices. Join us to learn how data can drive decision-making processes."
        />
        <EventCard
          image="https://images.unsplash.com/photo-1556155092-490a1ba16284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw2fHxEYXRhJTJDJTIwUmVzZWFyY2glMkMlMjBMYXB0b3B8ZW58MXx8fHwxNzIzNzkwODExfDA&ixlib=rb-4.0.3&q=80&w=1080"
          title="Jennifer Smith: Statistical Insights"
          description="A series of expert talks on statistical insights and their practical applications."
        />
        <EventCard
          image="https://images.unsplash.com/photo-1547032175-7fc8c7bd15b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxBbmFseXRpY3N8ZW58MXx8fHwxNzIzNzg0NTk3fDA&ixlib=rb-4.0.3&q=80&w=1080"
          title="Michael Johnson: Data Visualization"
          description="Join us for a session on data visualization techniques and tools. Learn how to effectively communicate statistical findings through compelling visual representations."
        />
      </div>
      <div className="mt-8 text-center">
        <Button className='bg-purple-600' variant="outline">View Events</Button>
      </div>
    </Section>
  )
}

const EventCard: React.FC<{ image: string; title: string; description: string }> = ({ image, title, description }) => {
  return (
    <Card className="overflow-hidden rounded-lg shadow-lg">
      <div
        className="h-40 sm:h-56 md:h-64 bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      />
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  )
}
