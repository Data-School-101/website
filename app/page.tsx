import Footer from "@/components/home/footer"
import Header from "@/components/header"
import { Discover, Events, Explore, Intro } from "@/components/home/"
import React from "react"

const Home: React.FC = () => {
  return (
    <>
      <Header />
      {/* <main className="container flex min-h-screen flex-col items-center justify-between"> */}
      <Intro />
      <Discover />
      <Events />
      <Explore />
      <Footer />
      {/* </main> */}
    </>
  )
}

export default Home
