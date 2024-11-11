"use client"

import { useState } from "react"
import { Heart, MessageCircle, Camera, X, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Feature {
  id: string
  icon: JSX.Element
  name: string
  isActive?: boolean
}

export default function FeaturesPreview() {
  const [activeFeature, setActiveFeature] = useState("journal")

  const features: Feature[] = [
    { id: "profile", icon: <UserIcon className="w-5 h-5" />, name: "Profile" },
    { id: "checklist", icon: <ChecklistIcon className="w-5 h-5" />, name: "Checklist" },
    { id: "planner", icon: <PlannerIcon className="w-5 h-5" />, name: "Planner" },
    { id: "budget", icon: <BudgetIcon className="w-5 h-5" />, name: "Budget" },
    { id: "journal", icon: <JournalIcon className="w-5 h-5" />, name: "Journal", isActive: true },
    { id: "reels", icon: <ReelsIcon className="w-5 h-5" />, name: "Travel reels" },
    { id: "map", icon: <MapIcon className="w-5 h-5" />, name: "Scratch map" },
    { id: "documents", icon: <DocumentIcon className="w-5 h-5" />, name: "Documents" },
  ]

  return (
    <div className="max-w-4xl mx-auto p-4">
      <nav className="flex justify-between items-center mb-8 overflow-x-auto pb-4">
        {features.map((feature) => (
          <button
            key={feature.id}
            onClick={() => setActiveFeature(feature.id)}
            className={`flex flex-col items-center min-w-[80px] px-2 ${
              activeFeature === feature.id ? "text-[#4CD4A1]" : "text-gray-500"
            }`}
          >
            {feature.icon}
            <span className="text-sm mt-1">{feature.name}</span>
          </button>
        ))}
      </nav>

      {activeFeature === "journal" && (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-[#1E293B] text-white p-4 flex items-center">
            <span className="text-sm">🇹🇭 Day 3-5: Koh Phangan</span>
            <X className="w-4 h-4 ml-auto" />
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg"
              alt="Koh Phangan Beach"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute bottom-4 left-4 flex items-center text-white">
              <div className="w-8 h-8 rounded-full bg-gray-200 mr-2" />
              <span>Lara</span>
              <span className="ml-2 text-sm opacity-80">1/4</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center space-x-4 mb-4">
              <button className="flex items-center">
                <Heart className="w-5 h-5 mr-1" />
                <span>82</span>
              </button>
              <button className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-1" />
                <span>19</span>
              </button>
            </div>
            <h3 className="font-bold mb-2">Koh Phangan</h3>
            <p className="text-gray-600 text-sm">
              Spent the day beach-hopping—started at Kelingking Beach, that famous cliff view is even better in real life. 
              The water at Crystal Bay was unreal, perfect for a quick swim and snorkel. 
              Ended the day watching the sunset at Broken Beach, the whole place felt like a dream!
            </p>
            <div className="text-xs text-gray-400 mt-2">12 - 15 Sep '24</div>
          </div>
          <div className="border-t p-4 flex justify-between">
            <button className="text-gray-600">Trip overview</button>
            <button className="flex items-center text-[#4CD4A1]">
              <Share2 className="w-4 h-4 mr-1" />
              Share trip
            </button>
          </div>
        </div>
      )}

      <div className="fixed bottom-4 right-4">
        <Button className="bg-[#4CD4A1] hover:bg-[#3bbd8c] text-white rounded-full w-12 h-12 flex items-center justify-center">
          <Camera className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}

// Icon components
function UserIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"/>
    </svg>
  )
}

function ChecklistIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M9 11l3 3L22 4"/>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
    </svg>
  )
}

function PlannerIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )
}

function BudgetIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10"/>
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
      <path d="M12 18V6"/>
    </svg>
  )
}

function JournalIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  )
}

function ReelsIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
      <line x1="7" y1="2" x2="7" y2="22"/>
      <line x1="17" y1="2" x2="17" y2="22"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <line x1="2" y1="7" x2="7" y2="7"/>
      <line x1="2" y1="17" x2="7" y2="17"/>
      <line x1="17" y1="17" x2="22" y2="17"/>
      <line x1="17" y1="7" x2="22" y2="7"/>
    </svg>
  )
}

function MapIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
      <line x1="8" y1="2" x2="8" y2="18"/>
      <line x1="16" y1="6" x2="16" y2="22"/>
    </svg>
  )
}

function DocumentIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  )
}