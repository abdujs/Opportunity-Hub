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

  const filtered = filterOpportunities(opportunities, { search, type, location });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Opportunities</h1>
      <SearchFilter search={search} setSearch={setSearch} type={type} setType={setType} location={location} setLocation={setLocation} />
      {filtered.length === 0 && <div>No opportunities found.</div>}
      {filtered.map((op) => (
        <OpportunityCard key={op.id} opportunity={op} />
      ))}
    </div>
  );
}
