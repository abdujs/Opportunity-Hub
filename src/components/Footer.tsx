import Link from "next/link";
import SubscriptionCard from "./SubscriptionCard";

export default function Footer() {
  return (
    <footer className="bg-[#D9DEE1] text-center py-4 mt-8 text-sm text-gray-500">
      <div>
        {/* Beehiiv Embedded Subscribe Form */}
        <SubscriptionCard />
        &copy; {new Date().getFullYear()} Opportunity Hub. All rights reserved.
      </div>
      <nav className="flex flex-wrap justify-center items-center gap-3 mt-4 text-primary font-medium">
        <Link href="/opportunities" className="hover:underline">
          Opportunities
        </Link>
        <span className="hidden sm:inline">|</span>
        <Link href="/articles" className="hover:underline">
          Articles
        </Link>
        <span className="hidden sm:inline">|</span>
        <Link href="/events" className="hover:underline">
          Events
        </Link>
        <span className="hidden sm:inline">|</span>
        <Link href="/fellowship" className="hover:underline">
          Fellowship
        </Link>
        <span className="hidden sm:inline">|</span>
        <Link href="/scholarship" className="hover:underline">
          Scholarship
        </Link>
        <span className="hidden sm:inline">|</span>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </nav>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-2">
        <a
          href="https://t.me/opp_hub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Join our Telegram
        </a>
        <span className="hidden sm:inline">|</span>
        <a
          href="/privacy-policy"
          className="text-blue-600 underline"
        >
          Privacy Policy
        </a>
        <span className="hidden sm:inline">|</span>
        <a
          href="/terms-conditions"
          className="text-blue-600 underline"
        >
          Terms &amp; Conditions
        </a>
      </div>
    </footer>
  );
}
