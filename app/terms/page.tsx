"use client"

import { motion } from "framer-motion"
import { ScrollText, Shield, Users, Zap, Scale, AlertCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TermsOfServicePage() {
  const sections = [
    {
      id: 1,
      icon: <Shield className="h-6 w-6" />,
      title: "Acceptance of Terms",
      content: "By accessing or using TravelPlanner, you agree to be bound by these Terms of Service and all applicable laws and regulations."
    },
    {
      id: 2,
      icon: <Users className="h-6 w-6" />,
      title: "User Accounts",
      content: "You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account."
    },
    {
      id: 3,
      icon: <Zap className="h-6 w-6" />,
      title: "Use of Services",
      content: "You agree to use TravelPlanner for lawful purposes only and in a way that does not infringe upon the rights of others or restrict their use of the service."
    },
    {
      id: 4,
      icon: <ScrollText className="h-6 w-6" />,
      title: "Intellectual Property",
      content: "The content, features, and functionality of TravelPlanner are owned by us and are protected by international copyright, trademark, and other intellectual property laws."
    },
    {
      id: 5,
      icon: <Scale className="h-6 w-6" />,
      title: "Limitation of Liability",
      content: "TravelPlanner shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service."
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
              <ScrollText className="h-6 w-6 text-[#6B46C1]" />
            </motion.div>
            <h1 className="text-3xl font-bold text-[#6B46C1] mb-4">Terms of Service</h1>
            <p className="text-gray-600">
              Welcome to TravelPlanner. By using our website and services, you agree to comply with and be bound by the following terms and conditions.
            </p>
          </div>

          {/* Main Content */}
          <Card className="p-8 shadow-lg">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-[#6B46C1] group-hover:bg-[#6B46C1] group-hover:text-white transition-colors">
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-[#6B46C1] mb-2">
                        {section.id}. {section.title}
                      </h2>
                      <p className="text-gray-600">{section.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Important Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 pt-8 border-t"
            >
              <div className="bg-purple-50 p-6 rounded-lg flex gap-4">
                <AlertCircle className="h-6 w-6 text-[#6B46C1] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#6B46C1] mb-2">Important Notice</h3>
                  <p className="text-sm text-gray-600">
                    These terms of service are effective as of {new Date().toLocaleDateString()} and may be updated periodically. 
                    Your continued use of TravelPlanner after any changes indicates your acceptance of the new terms.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <Button variant="outline" className="w-full sm:w-auto">
                  Contact Support
                </Button>
              </Link>
              <Link href="/privacy">
                <Button 
                  className="w-full sm:w-auto bg-[#4CD4A1] hover:bg-[#3bbd8c] text-white"
                >
                  Privacy Policy
                </Button>
              </Link>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}