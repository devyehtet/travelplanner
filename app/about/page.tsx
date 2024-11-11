"use client"

import { motion } from "framer-motion"
import { Compass, Users, Map, Globe2, Plane } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-[#6B46C1] mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About TravelPlanner
          </motion.h1>
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Plane className="h-16 w-16 text-[#6B46C1]" />
          </motion.div>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            {...fadeIn}
          >
            TravelPlanner is your ultimate companion for creating unforgettable travel experiences. Born out of a passion for exploration and a desire to simplify trip planning, our platform brings together travelers from all walks of life.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-[#6B46C1] mb-6">Our Mission</h2>
            <div className="flex items-center gap-6 flex-wrap">
              <Globe2 className="h-12 w-12 text-[#4CD4A1]" />
              <p className="flex-1 text-lg text-gray-600">
                We believe that travel has the power to broaden horizons, create lasting memories, and bring people together. Our mission is to make trip planning as exciting as the journey itself by providing intuitive tools and fostering a community of passionate travelers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#6B46C1] mb-12 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Compass className="h-8 w-8 text-[#4CD4A1] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Intuitive Planning Tools</h3>
              <p className="text-gray-600">Create detailed itineraries with our easy-to-use planning tools.</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Users className="h-8 w-8 text-[#4CD4A1] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Collaborative Features</h3>
              <p className="text-gray-600">Plan trips together with friends and family in real-time.</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Map className="h-8 w-8 text-[#4CD4A1] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Destination Guides</h3>
              <p className="text-gray-600">Access curated guides for popular destinations worldwide.</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Globe2 className="h-8 w-8 text-[#4CD4A1] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Tips</h3>
              <p className="text-gray-600">Get recommendations from experienced travelers.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#6B46C1] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join us today and start planning your next adventure!
            </p>
            <Link href="/register">
              <Button className="bg-[#4CD4A1] hover:bg-[#3bbd8c] text-white text-lg px-8 py-6">
                Sign Up Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}