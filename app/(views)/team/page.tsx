import React from "react"
import { TeamsPage } from "@/components/team"

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
