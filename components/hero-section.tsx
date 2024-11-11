import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { FileText, Film, Globe, User, CheckSquare, Calendar } from "lucide-react"

export default function HeroSection() {
  const features = [
    { icon: <FileText className="w-6 h-6" />, name: "Journal", color: "text-gray-400" },
    { icon: <Film className="w-6 h-6" />, name: "Travel reels", color: "text-gray-400" },
    { icon: <Globe className="w-6 h-6" />, name: "Scratch map", color: "text-gray-400" },
    { icon: <FileText className="w-6 h-6" />, name: "Documents", color: "text-[#4CD4A1]" },
    { icon: <User className="w-6 h-6" />, name: "eSIM", color: "text-gray-400" },
    { icon: <User className="w-6 h-6" />, name: "Profile", color: "text-gray-400" },
    { icon: <CheckSquare className="w-6 h-6" />, name: "Checklist", color: "text-gray-400" },
    { icon: <Calendar className="w-6 h-6" />, name: "Planner", color: "text-gray-400" },
  ]

  return (
    <section className="pt-32 pb-16 bg-white relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-1/3 h-[600px] bg-[#FFE5E5]/20 rounded-tr-full" />
      <div className="absolute right-0 bottom-0 w-1/3 h-[600px] bg-[#E5FFE5]/20 rounded-tl-full" />
      
      <div className="container max-w-[1200px] mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#4CD4A1]">One travel app</span>
            <br />
            <span className="text-[#1E293B]">to replace them all</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Streamline every aspect of your trip - from itinerary planning and travel budgeting to packing and wanderlust sharing.
          </p>
          <Button className="bg-[#4CD4A1] hover:bg-[#3bbd8c] text-white rounded-full px-8 py-6 text-lg">
            Get started. It's FREE
          </Button>

          <div className="mt-20 grid grid-cols-4 md:grid-cols-8 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`mb-2 ${feature.color}`}>
                  {feature.icon}
                </div>
                <span className="text-sm text-gray-500">{feature.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-white rounded-lg shadow-xl p-4 max-w-3xl mx-auto">
          <Image
            src="/placeholder.svg"
            alt="Stippl App Interface"
            width={1000}
            height={600}
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}