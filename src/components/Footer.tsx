import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-8 text-sm text-gray-500">
      <div>
        &copy; {new Date().getFullYear()} Opportunity Hub. All rights reserved.
      </div>
      {/* Newsletter Subscription Form */}
      <div className="max-w-md mx-auto mt-4 px-2">
        <div className="text-base font-semibold text-blue-900 mb-2">
          Join our exclusive members for{" "}
          <span className="text-green-700 font-bold">free</span> to get weekly job
          digest.
          <br />
          <span className="text-sm text-gray-600 font-normal">
            Already{" "}
            <span className="font-bold text-blue-700">2,689</span> members joined!
          </span>
        </div>
        <form
          action="https://opportunity-hub.beehiiv.com/subscribe"
          method="post"
          target="_blank"
          className="flex flex-col sm:flex-row items-center gap-2"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email to join"
            className="flex-1 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-700 text-white rounded font-semibold hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
          >
            Join Free
          </button>
        </form>
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
