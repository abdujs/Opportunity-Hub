import opportunities from "../data/opportunities.json";
import OpportunityCard from "../components/OpportunityCard";

export default function Home() {
  const latestIds = opportunities.slice(0, 5).map(o => o.id);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Opportunities</h1>
      {opportunities.length === 0 && <div>No opportunities yet.</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {opportunities.map((op) => (
          <OpportunityCard key={op.id} opportunity={op} isLatest={latestIds.includes(op.id)} />
        ))}
      </div>
    </div>
  );
}
