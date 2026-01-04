"use client";
import { useState } from "react";
import opportunities from "../../data/opportunities.json";
import OpportunityCard from "../../components/OpportunityCard";
import SearchFilter from "../../components/SearchFilter";
import { filterOpportunities } from "../../utils/helpers";

export default function OpportunitiesPage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");


  // Sort so featured jobs are on top
  const filtered = filterOpportunities(opportunities, { search, type, location });
  const sorted = [...filtered].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });
  const latestIds = opportunities.slice(0, 5).map(o => o.id);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-primary">All Opportunities</h1>
      <SearchFilter search={search} setSearch={setSearch} type={type} setType={setType} location={location} setLocation={setLocation} />
      {filtered.length === 0 && <div>No opportunities found.</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map((op) => (
          <OpportunityCard key={op.id} opportunity={op} isLatest={latestIds.includes(op.id)} />
        ))}
      </div>
    </div>
  );
}
