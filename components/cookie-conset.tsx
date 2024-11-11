"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:max-w-2xl bg-white p-6 rounded-lg shadow-lg z-50">
      <h3 className="text-xl font-bold mb-3">This website uses cookies</h3>
      <p className="text-gray-600 mb-4">
        We use cookies that help the website to function and also to track how you interact with it. We will only use the
        cookies if you consent to it by clicking on "Accept all cookies". You can also manage individual cookie preferences.
        View our privacy policy{" "}
        <a href="#" className="text-emerald-500 hover:underline">
          here
        </a>
        .
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="outline"
          className="text-gray-600"
          onClick={() => setIsVisible(false)}
        >
          Cookie preferences
        </Button>
        <Button
          className="bg-emerald-500 hover:bg-emerald-600 text-white"
          onClick={() => setIsVisible(false)}
        >
          Accept all
        </Button>
      </div>
    </div>
  )
}