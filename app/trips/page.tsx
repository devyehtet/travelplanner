"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Palmtree, Snowflake, Plus, MapPin, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"

const trips = [
  {
    id: 1,
    title: "Summer Vacation",
    destination: "Hawaii",
    dates: "7/1/2024 - 7/15/2024",
    icon: <Palmtree className="h-6 w-6" />,
    theme: "summer",
    gradient: "from-orange-50 to-rose-50"
  },
  {
    id: 2,
    title: "Winter Getaway",
    destination: "Swiss Alps",
    dates: "12/20/2024 - 12/30/2024",
    icon: <Snowflake className="h-6 w-6" />,
    theme: "winter",
    gradient: "from-blue-50 to-indigo-50"
  }
]

export default function TripsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-[#6B46C1]">My Trips</h1>
            <p className="text-gray-600 mt-2">Plan and manage your adventures</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/trips/new">
              <Button className="bg-[#4CD4A1] hover:bg-[#3bbd8c] text-white">
                <Plus className="h-4 w-4 mr-2" />
                Create New Trip
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Trips Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {trips.map((trip, index) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`bg-gradient-to-br ${trip.gradient} hover:shadow-lg transition-all duration-300 group`}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className={`p-3 rounded-xl bg-white/50 backdrop-blur-sm 
                    ${trip.theme === 'summer' ? 'text-orange-500' : 'text-blue-500'}`}>
                    {trip.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{trip.title}</h2>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{trip.destination}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{trip.dates}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/trips/${trip.id}`} className="w-full">
                    <Button 
                      variant="ghost" 
                      className="w-full group-hover:bg-white/50 group-hover:text-[#6B46C1] transition-all duration-300"
                    >
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}

          {/* Empty Trip Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/trips/new">
              <Card className="h-full min-h-[250px] flex flex-col items-center justify-center text-center p-6 border-dashed cursor-pointer hover:bg-gray-50/50 transition-colors group">
                <div className="p-4 rounded-full bg-gray-50 mb-4 group-hover:bg-white transition-colors">
                  <Plus className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-600 mb-2">Plan a New Adventure</h3>
                <p className="text-sm text-gray-500">Click to create a new trip</p>
              </Card>
            </Link>
          </motion.div>
        </div>

        {/* Empty State */}
        {trips.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <div className="mb-4">
              <MapPin className="h-12 w-12 text-gray-300 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">No trips planned yet</h3>
            <p className="text-gray-500 mb-6">Start planning your next adventure!</p>
            <Link href="/trips/new">
              <Button className="bg-[#4CD4A1] hover:bg-[#3bbd8c] text-white">
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Trip
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  )
}