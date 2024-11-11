"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Plane,
  Map,
  Calendar,
  Globe,
  Compass,
  Sun,
  Cloud,
  Timer,
  TrendingUp,
  Plus,
  MapPin,
  Users,
  Activity,
  Heart
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function DashboardPage() {
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  const stats = [
    { icon: Globe, label: "Countries Visited", value: "0" },
    { icon: Map, label: "Cities Explored", value: "0" },
    { icon: Calendar, label: "Days Traveled", value: "0" },
    { icon: Users, label: "Travel Buddies", value: "0" }
  ]

  const inspirationalDestinations = [
    { 
      name: "Bali, Indonesia", 
      image: "/placeholder.svg?height=400&width=600",
      weather: "Sunny", 
      temp: "28°C",
      description: "Tropical paradise with stunning beaches and rich culture"
    },
    { 
      name: "Santorini, Greece", 
      image: "/placeholder.svg?height=400&width=600",
      weather: "Clear", 
      temp: "24°C",
      description: "Iconic white buildings overlooking the Aegean Sea"
    },
    { 
      name: "Kyoto, Japan", 
      image: "/placeholder.svg?height=400&width=600",
      weather: "Cloudy", 
      temp: "20°C",
      description: "Ancient temples and beautiful Japanese gardens"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-[#6B46C1]">Your Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back! Ready for your next adventure?</p>
          </div>
          <Link href="/trips/new">
            <Button className="bg-[#4CD4A1] hover:bg-[#3bbd8c] text-white">
              <Plus className="h-4 w-4 mr-2" />
              Create New Trip
            </Button>
          </Link>
        </motion.div>

        {/* Main Grid */}
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Upcoming Trips Card */}
          <motion.div variants={itemAnimation} className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plane className="h-5 w-5 text-[#6B46C1]" />
                  Upcoming Trips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="bg-purple-50 p-4 rounded-full mb-4">
                    <Globe className="h-8 w-8 text-[#6B46C1]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No upcoming trips</h3>
                  <p className="text-gray-600 mb-6 max-w-md">
                    Start planning your next adventure! Create a new trip and track all your travel plans in one place.
                  </p>
                  <Link href="/trips/new">
                    <Button className="bg-[#4CD4A1] hover:bg-[#3bbd8c] text-white">
                      Plan Your First Trip
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Travel Stats Card */}
          <motion.div variants={itemAnimation}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-[#6B46C1]" />
                  Travel Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 rounded-lg bg-gray-50">
                      <stat.icon className="h-6 w-6 text-[#6B46C1] mx-auto mb-2" />
                      <div className="text-2xl font-bold text-[#6B46C1]">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Travel Goals */}
          <motion.div variants={itemAnimation}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-[#6B46C1]" />
                  Travel Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Countries to Visit</span>
                    <span className="text-[#6B46C1]">0/10</span>
                  </div>
                  <Progress value={0} className="bg-purple-100" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Adventures Completed</span>
                    <span className="text-[#6B46C1]">0/5</span>
                  </div>
                  <Progress value={0} className="bg-purple-100" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Travel Inspiration */}
          <motion.div variants={itemAnimation} className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#6B46C1]">
                  <Heart className="h-5 w-5" />
                  Travel Inspiration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {inspirationalDestinations.map((destination, index) => (
                    <motion.div
                      key={destination.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative group rounded-lg overflow-hidden aspect-[4/3]"
                    >
                      <Image
                        src={destination.image}
                        alt={`View of ${destination.name}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white font-semibold text-lg mb-1">
                            {destination.name}
                          </h3>
                          <p className="text-white/90 text-sm mb-2">
                            {destination.description}
                          </p>
                          <div className="flex items-center gap-2 text-white/90 text-sm">
                            {destination.weather === "Sunny" ? (
                              <Sun className="h-4 w-4" />
                            ) : (
                              <Cloud className="h-4 w-4" />
                            )}
                            <span>
                              {destination.weather} · {destination.temp}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Tips */}
          <motion.div variants={itemAnimation}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Compass className="h-5 w-5 text-[#6B46C1]" />
                  Travel Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50">
                    <MapPin className="h-5 w-5 text-[#6B46C1] mt-0.5" />
                    <p className="text-sm text-gray-600">Research local customs and traditions before your trip</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50">
                    <Timer className="h-5 w-5 text-[#6B46C1] mt-0.5" />
                    <p className="text-sm text-gray-600">Book flights and accommodations at least 3 months in advance</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50">
                    <Cloud className="h-5 w-5 text-[#6B46C1] mt-0.5" />
                    <p className="text-sm text-gray-600">Check weather forecasts to pack appropriate clothing</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}