import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#6B46C1] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              TravelPlanner
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-6">
            <Link href="/about" className="hover:text-[#4CD4A1] transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-[#4CD4A1] transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-[#4CD4A1] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#4CD4A1] transition-colors">
              Terms of Service
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} TravelPlanner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}