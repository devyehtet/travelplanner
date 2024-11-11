"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const regions = {
  "Asia": [
    "Tokyo, Japan",
    "Kyoto, Japan",
    "Seoul, South Korea",
    "Bangkok, Thailand",
    "Singapore",
    "Bali, Indonesia",
  ],
  "Europe": [
    "Paris, France",
    "London, UK",
    "Rome, Italy",
    "Barcelona, Spain",
    "Amsterdam, Netherlands",
    "Venice, Italy",
    "Prague, Czech Republic",
    "Santorini, Greece",
  ],
  "Americas": [
    "New York City, USA",
    "San Francisco, USA",
    "Vancouver, Canada",
    "Rio de Janeiro, Brazil",
    "Buenos Aires, Argentina",
    "Cancun, Mexico",
  ],
  "Oceania": [
    "Sydney, Australia",
    "Melbourne, Australia",
    "Auckland, New Zealand",
    "Fiji Islands",
  ],
  "Middle East & Africa": [
    "Dubai, UAE",
    "Istanbul, Turkey",
    "Cairo, Egypt",
    "Cape Town, South Africa",
    "Marrakech, Morocco",
  ],
}

interface DestinationSearchProps {
  onSelect: (destination: string) => void
}

export function DestinationSearch({ onSelect }: DestinationSearchProps) {
  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select destination..." />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(regions).map(([region, destinations]) => (
          <SelectGroup key={region}>
            <SelectLabel>{region}</SelectLabel>
            {destinations.map((destination) => (
              <SelectItem key={destination} value={destination}>
                {destination}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  )
}