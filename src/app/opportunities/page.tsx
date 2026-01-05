"use client";

import { useState } from "react";
import opportunities from "../../data/opportunities.json";
import OpportunityCard from "../../components/OpportunityCard";
import { filterOpportunities } from "../../utils/helpers";

export default function OpportunitiesPage() {

  // Only use type for tag-based filtering
  const [type, setType] = useState("");



  // Filter opportunities by type (tag)
  const filtered = type
    ? opportunities.filter(op =>
        op.type && op.type.toLowerCase() === type.toLowerCase()
      )
    : opportunities;

  // Sort so featured jobs are on top
  const sorted = [...filtered].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });
  const latestIds = opportunities.slice(0, 5).map(o => o.id);


  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-primary">All Opportunities</h1>
      {/* Tag Filter */}
      <div className="mb-8 max-w-2xl mx-auto">
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
      {sorted.length === 0 && <div>No opportunities found.</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map((op) => (
          <OpportunityCard key={op.id} opportunity={op} isLatest={latestIds.includes(op.id)} />
        ))}
      </div>
    </div>
  );
}
