import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow mb-4">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link href="/">
          <span className="flex items-center gap-2 font-bold text-xl text-blue-700">
            <img src="/logo.svg" alt="Opportunity Hub Logo" className="h-8 w-8" />
            Opportunity Hub
          </span>
        </Link>
        <div className="flex gap-6">
          <Link href="/opportunities" className="hover:text-blue-600">Opportunities</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/submit" className="hover:text-blue-600">Submit</Link>
        </div>
      </div>
    </nav>
  );
}
