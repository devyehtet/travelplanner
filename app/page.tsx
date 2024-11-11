"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Calendar, Users } from "lucide-react"
import { AuthProvider } from "@/contexts/auth-context"

const features = [
  {
    icon: <MapPin className="h-12 w-12 text-[#6B46C1]" />,
    title: "Discover Destinations",
    description: "Explore curated lists of popular destinations and hidden gems around the world."
  },
  {
    icon: <Calendar className="h-12 w-12 text-[#6B46C1]" />,
    title: "Create Itineraries",
    description: "Plan your trips day by day with our easy-to-use itinerary builder."
  },
  {
    icon: <Users className="h-12 w-12 text-[#6B46C1]" />,
    title: "Collaborate with Friends",
    description: "Invite friends to view and edit your travel plans in real-time."
  }
]

const HomePageContent = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#6B46C1] text-white py-32 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ 
            duration: 90,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to TravelPlanner
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Plan your trips with ease and collaborate with friends.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/register">
              <Button 
                className="bg-[#4CD4A1] hover:bg-[#3bbd8c] text-white text-lg px-8 py-6"
              >
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose TravelPlanner?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <motion.div
                    className="mb-4 flex justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Start Planning?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of travelers who use TravelPlanner to make their dream trips a reality.
            </p>
            <Link href="/register">
              <Button 
                className="bg-[#4CD4A1] hover:bg-[#3bbd8c] text-white text-lg px-8 py-6"
              >
                Sign Up Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default function HomePage() {
  return (
    <AuthProvider>
      <HomePageContent />
    </AuthProvider>
  )
}