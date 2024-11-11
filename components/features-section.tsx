import { FileText, Smartphone, User, CheckSquare, Calendar, DollarSign, Book, Film, Image } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    { icon: <FileText className="w-6 h-6" />, name: "Documents" },
    { icon: <Smartphone className="w-6 h-6" />, name: "GSM" },
    { icon: <User className="w-6 h-6" />, name: "Profile" },
    { icon: <CheckSquare className="w-6 h-6" />, name: "Checklist" },
    { icon: <Calendar className="w-6 h-6" />, name: "Planner" },
    { icon: <DollarSign className="w-6 h-6" />, name: "Budget" },
    { icon: <Book className="w-6 h-6" />, name: "Journal" },
    { icon: <Film className="w-6 h-6" />, name: "Travel reels" },
    { icon: <Image className="w-6 h-6" />, name: "Scrapbook" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                {feature.icon}
              </div>
              <span className="text-sm text-gray-600">{feature.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}