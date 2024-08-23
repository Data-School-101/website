import Footer from "@/components/home/footer"
import Header from "@/components/header"
import { Discover, Events, Explore, Intro } from "@/components/home/"
import React from "react"

const Home: React.FC = () => {
  return (
    <>
      <main className="container w-full flex min-h-screen flex-col items-center justify-between">
        <Intro />
        <Discover />
        <Events />
        <Explore />
      </main>
    </>
  )
}

export default Home
