"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Plus, Palmtree } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function TripDetailsPage() {
  const [newActivity, setNewActivity] = useState("")
  const [activities, setActivities] = useState([
    { day: 1, description: "Arrive in Honolulu" },
    { day: 2, description: "Beach day at Waikiki" }
  ])

  const handleAddActivity = (e: React.FormEvent) => {
    e.preventDefault()
    if (newActivity.trim()) {
      setActivities([...activities, { 
        day: activities.length + 1, 
        description: newActivity.trim() 
      }])
      setNewActivity("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/trips" className="inline-flex items-center text-[#6B46C1] hover:text-[#4CD4A1] mb-6 group">
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to My Trips
          </Link>
        </motion.div>

        {/* Trip Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-2">
            <Palmtree className="h-6 w-6 text-[#4CD4A1]" />
            <h1 className="text-3xl font-bold">Summer Vacation</h1>
          </div>
        </motion.div>

        {/* Trip Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Trip Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#6B46C1]" />
                  <span className="font-medium">Destination:</span>
                  <span>Hawaii</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#6B46C1]" />
                  <span className="font-medium">Dates:</span>
                  <span>7/1/2024 - 7/15/2024</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Itinerary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Itinerary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {activities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-[#6B46C1] font-semibold">
                      {activity.day}
                    </div>
                    <div className="flex-grow">
                      <div className="bg-white p-4 rounded-lg shadow-sm border">
                        {activity.description}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Add Activity Form */}
                <form onSubmit={handleAddActivity} className="mt-6">
                  <div className="flex gap-2">
                    <Input
                      value={newActivity}
                      onChange={(e) => setNewActivity(e.target.value)}
                      placeholder="Add new activity"
                      className="flex-grow"
                    />
                    <Button 
                      type="submit"
                      className="bg-[#4CD4A1] hover:bg-[#3bbd8c] text-white"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add
                    </Button>
                  </div>
                </form>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}