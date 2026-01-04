"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <img src="/logo.svg" alt="Opportunity Hub Logo" className="h-9 w-9" />
          <span className="text-2xl font-bold text-primary tracking-tight">Opportunity Hub</span>
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {/* <Link href="/opportunities" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 px-2 py-1 rounded">Opportunities</Link> */}
          <Link href="/articles" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 px-2 py-1 rounded">Articles</Link>
          <Link href="/events" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 px-2 py-1 rounded">Events</Link>
          <Link href="/fellowship" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 px-2 py-1 rounded">Fellowship</Link>
          <Link href="/scholarship" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 px-2 py-1 rounded">Scholarship</Link>
          <Link href="/about" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 px-2 py-1 rounded">About</Link>
          <Link href="/contact" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 px-2 py-1 rounded">Contact</Link>
        </div>
        {/* Telegram Button */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://t.me/oportunity_hub"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-2 rounded-md bg-blue-700 hover:bg-blue-800 text-white font-semibold shadow focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors duration-150 border-2 border-blue-400"
            style={{ minWidth: 140, justifyContent: 'center' }}
          >
            <Image src="/telegram.svg" alt="Telegram" width={22} height={22} />
            <span>Join Telegram</span>
          </a>
        </div>
        {/* Hamburger for Mobile */}
        <button
          className="md:hidden flex items-center px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-300"
          aria-label="Open menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg px-4 py-4 space-y-2">
          {/* <Link href="/opportunities" className="block text-primary font-medium py-2 px-2 rounded hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => setMenuOpen(false)}>Opportunities</Link> */}
          <Link href="/articles" className="block text-primary font-medium py-2 px-2 rounded hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => setMenuOpen(false)}>Articles</Link>
          <Link href="/events" className="block text-primary font-medium py-2 px-2 rounded hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => setMenuOpen(false)}>Events</Link>
          <Link href="/fellowship" className="block text-primary font-medium py-2 px-2 rounded hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => setMenuOpen(false)}>Fellowship</Link>
          <Link href="/scholarship" className="block text-primary font-medium py-2 px-2 rounded hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => setMenuOpen(false)}>Scholarship</Link>
          <Link href="/about" className="block text-primary font-medium py-2 px-2 rounded hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" className="block text-primary font-medium py-2 px-2 rounded hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => setMenuOpen(false)}>Contact</Link>
          <a
            href="https://t.me/oportunity_hub"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-3 rounded-md bg-blue-700 hover:bg-blue-800 text-white font-semibold shadow focus:outline-none focus:ring-4 focus:ring-blue-300 border-2 border-blue-400 mt-2 justify-center"
            style={{ minWidth: 140 }}
            onClick={() => setMenuOpen(false)}
          >
            <Image src="/telegram.svg" alt="Telegram" width={22} height={22} />
            <span>Join Telegram</span>
          </a>
        </div>
      )}
    </nav>
  );
}

