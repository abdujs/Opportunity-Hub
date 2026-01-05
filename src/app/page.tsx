"use client";

import { useState } from "react";
import opportunities from "../data/opportunities.json";
import OpportunityCard from "../components/OpportunityCard";
import SearchFilter from "../components/SearchFilter";

export default function Home() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");

  const latestIds = opportunities.slice(0, 5).map(o => o.id);
  const featuredOpportunities = opportunities.slice(0, 3); // Top 3 as featured
  const otherOpportunities = opportunities.slice(3);

  return (
    <div>
      {/* Value Proposition Section */}
      <section className="text-center py-12 mb-10 bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-2xl shadow-lg border border-blue-200">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-5 text-blue-900 tracking-tight drop-shadow-lg">
          Discover the <span className="text-blue-600">Best Opportunities</span>
        </h1>
        <p className="text-xl md:text-2xl text-blue-800 max-w-3xl mx-auto mb-8 font-medium leading-relaxed">
          Opportunity Hub connects you with the latest <span className="font-semibold text-blue-700 bg-yellow-200 rounded px-2 py-1 inline-block" style={{boxShadow: '0 2px 8px rgba(255, 221, 51, 0.2)'}}>jobs</span>, <span className="font-semibold text-blue-700">scholarships</span>, <span className="font-semibold text-blue-700">fellowships</span>, <span className="font-semibold text-blue-700">internships</span>, and more.<br className="hidden md:block" />
          Find your next big step and unlock your potential with curated opportunities from around the world.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="text-lg font-extrabold text-blue-900 mb-1 tracking-tight">Get Job Alerts</div>
          <div className="text-base text-blue-700 mb-2 font-semibold">Join 2,689+ members and get weekly job digests for free!</div>
          <button
            onClick={() => {
              const footer = document.querySelector('footer');
              if (footer) {
                footer.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-md transition-all duration-200 border-2 border-blue-300 hover:border-blue-500 mt-2"
          >
            Join Free & Get Weekly Job Alerts
          </button>
        </div>
      </section>

      {/* Search Bar and Filters */}
      <div className="mb-8 max-w-2xl mx-auto">
        {/* Tag Filter Example: Replace with your own tags and logic */}
        <div className="flex flex-wrap gap-2 justify-center">
          {["Job", "Internship", "Scholarship", "Fellowship", "Remote", "Onsite"].map(tag => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-full border-2 font-semibold transition-colors duration-150 ${type === tag ? "bg-blue-600 text-white border-blue-600" : "bg-white text-blue-700 border-blue-300 hover:bg-blue-50"}`}
              onClick={() => setType(type === tag ? "" : tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Opportunities Section */}
      {featuredOpportunities.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">Featured Opportunities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-8">
            {featuredOpportunities.map((op) => (
              <div className="bg-white rounded-lg shadow-md p-4 transition-transform hover:scale-105 hover:shadow-lg duration-200">
                <OpportunityCard key={op.id} opportunity={op} isLatest={true} />
              </div>
            ))}
          </div>
        </section>
      )}

      <h2 className="text-2xl font-bold mb-4">All Opportunities</h2>
      {otherOpportunities.length === 0 && <div>No opportunities yet.</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-8">
        {otherOpportunities.map((op) => (
          <div className="bg-white rounded-lg shadow-md p-4 transition-transform hover:scale-105 hover:shadow-lg duration-200">
            <OpportunityCard key={op.id} opportunity={op} isLatest={latestIds.includes(op.id)} />
          </div>
        ))}
      </div>

      {/* Supported by / Partners Section */}
      <section className="mt-16 mb-8 bg-blue-50 rounded-lg py-8">
        <h2 className="text-xl font-semibold mb-4 text-center text-blue-800">Supported by</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 px-2 md:px-8">
          <img src="/logo1.png" alt="Partner 1 Logo" className="h-16 w-auto object-contain transition duration-200" />
          <img src="/logo2.png" alt="Partner 2 Logo" className="h-16 w-auto object-contain transition duration-200" />
          <img src="/logo3.png" alt="Partner 3 Logo" className="h-16 w-auto object-contain transition duration-200" />
        </div>
      </section>
    </div>
  );
}
