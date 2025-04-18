import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-black py-6 px-4 relative" id="footer-bg">
      <div className="container mx-auto flex flex-col items-center gap-4">
        {/* Logo */}
        <div className="mb-4">
          <Image
            src="/logos/logo.png"
            alt="Edulot Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 text-white text-sm">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link href="/roadmap" className="hover:text-gray-300 transition-colors">
            Roadmap
          </Link>
          <Link href="/college" className="hover:text-gray-300 transition-colors">
            college
          </Link>
          <Link href="/contact-us" className="hover:text-gray-300 transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Copyright and Legal */}
        <div className="text-gray-400 text-xs text-center mt-2">
          <p>
            © Edulot {currentYear}. All rights reserved. | {' '}
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link> | {' '}
            <Link href="/terms-of-service" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
