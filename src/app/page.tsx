import opportunities from "../data/opportunities.json";
import OpportunityCard from "../components/OpportunityCard";

export default function Home() {
  const featured = opportunities.filter((o) => o.featured);
  const latest = opportunities.slice(0, 5);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Featured Opportunities</h1>
      {featured.length === 0 && <div>No featured opportunities yet.</div>}
      {featured.map((op) => (
        <OpportunityCard key={op.id} opportunity={op} />
      ))}
      <h2 className="text-xl font-semibold mt-8 mb-4">Latest Opportunities</h2>
      {latest.map((op) => (
        <OpportunityCard key={op.id} opportunity={op} />
      ))}
    </div>
  );
}
