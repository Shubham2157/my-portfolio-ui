"use client"

import { Suspense } from "react"
import HomeContent from "./home-content"

export default function Home() {
  return (
    <Suspense fallback={<div className="w-full h-screen bg-white dark:bg-black" />}>
      <HomeContent />
    </Suspense>
  )
}
