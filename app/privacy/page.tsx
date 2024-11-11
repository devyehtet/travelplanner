"use client"

import { motion } from "framer-motion"
import { Shield, Lock, FileText, UserCheck, Bell, Eye, Database, Key } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const sections = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, plan a trip, or contact us for support. This may include your name, email address, and travel preferences."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you about your account and our products."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Data Security",
      content: "We implement a variety of security measures to protect your personal information and ensure its confidentiality."
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your personal information at any time. Please contact us if you wish to exercise these rights."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-purple-100 p-3 rounded-full mb-4"
            >
              <Shield className="h-6 w-6 text-[#6B46C1]" />
            </motion.div>
            <h1 className="text-3xl font-bold text-[#6B46C1] mb-4">Privacy Policy</h1>
            <p className="text-gray-600">
              At TravelPlanner, we are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </div>

          {/* Main Content */}
          <Card className="p-8 shadow-lg">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-[#6B46C1]">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-[#6B46C1] mb-2">{section.title}</h2>
                    <p className="text-gray-600">{section.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Security Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 pt-8 border-t"
            >
              <h2 className="text-xl font-semibold text-[#6B46C1] mb-6">Our Security Measures</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <Key className="h-6 w-6 text-[#6B46C1] mx-auto mb-2" />
                  <h3 className="font-medium mb-1">Encryption</h3>
                  <p className="text-sm text-gray-600">End-to-end data encryption</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <Eye className="h-6 w-6 text-[#6B46C1] mx-auto mb-2" />
                  <h3 className="font-medium mb-1">Monitoring</h3>
                  <p className="text-sm text-gray-600">24/7 security monitoring</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <Bell className="h-6 w-6 text-[#6B46C1] mx-auto mb-2" />
                  <h3 className="font-medium mb-1">Alerts</h3>
                  <p className="text-sm text-gray-600">Instant security alerts</p>
                </div>
              </div>
            </motion.div>

            {/* Last Updated */}
            <motion.p 
              className="mt-8 text-sm text-gray-500 italic text-center"
              {...fadeIn}
            >
              This privacy policy is effective as of {new Date().toLocaleDateString()} and may be updated periodically. 
              Please check back regularly for any changes.
            </motion.p>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}