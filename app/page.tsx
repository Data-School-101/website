import Footer from "@/components/home/Footer"
import Header from "@/components/home/Header"
import { IntroSection } from "@/components/home/intro-card"
import React from "react"

const Home: React.FC = () => {
  return (
    <>
      <Header />
      {/* <main className="container flex min-h-screen flex-col items-center justify-between"> */}
      <IntroSection />
      <Footer />
      {/* </main> */}
    </>
  )
}

export default Home
