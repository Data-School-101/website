import Footer from "@/components/home/footer"
import Header from "@/components/header"
import { Discover, Events, Explore, Intro } from "@/components/home/"
import React from "react"
import { TeamsPage } from "@/components/teams"

const Teams: React.FC = () => {
  return (
    <>
      <main className="container w-full flex min-h-screen flex-col items-center justify-between">
        <TeamsPage />
      </main>
    </>
  )
}

export default Teams
