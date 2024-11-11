"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"

export default function Header() {
  const pathname = usePathname()
  const { isAuthenticated, logout } = useAuth()
  
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-[#6B46C1] text-xl font-semibold hover:opacity-90 transition-opacity"
        >
          TravelPlanner
        </Link>
        
        <nav className="flex items-center space-x-4">
          <Link 
            href="/"
            className={`transition-colors ${
              pathname === '/' 
                ? 'text-[#6B46C1] font-medium' 
                : 'text-gray-600 hover:text-[#6B46C1]'
            }`}
          >
            Home
          </Link>
          {isAuthenticated && (
            <>
              <Link 
                href="/trips"
                className={`transition-colors ${
                  pathname.startsWith('/trips') 
                    ? 'text-[#6B46C1] font-medium' 
                    : 'text-gray-600 hover:text-[#6B46C1]'
                }`}
              >
                My Trips
              </Link>
              <Button 
                onClick={logout}
                className="bg-[#4CD4A1] hover:bg-[#3bbd8c] text-white"
              >
                Logout
              </Button>
            </>
          )}
          {!isAuthenticated && (
            <>
              <Link href="/login">
                <Button variant="ghost" className="text-[#6B46C1] hover:bg-[#6B46C1]/10">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-[#4CD4A1] hover:bg-[#3bbd8c] text-white">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}