import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
        <div className="max-w-[600px] mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">You handle the booking, we'll take it from there</h3>
          <p className="text-gray-600 mb-8">
            Simply forward your confirmation emails to plans@tripit.com and in a matter of seconds, TripIt will create a master itinerary for each of your trips.
          </p>
          <ul className="space-y-4 mb-8 text-left">
            <li className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span>Automatically creates itineraries</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span>Syncs with your calendar</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span>Provides real-time alerts</span>
            </li>
          </ul>
          <Button className="bg-[#4461F2] hover:bg-[#2944d1] text-white font-medium px-8">
            Try It Now
          </Button>
        </div>
      </div>
    </section>
  )
}