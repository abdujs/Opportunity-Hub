import opportunities from "../../../data/opportunities.json";
import OpportunityDetail from "../../../components/OpportunityDetail";

// Next.js 14+ app router: params may be a Promise
export default async function OpportunityDetailPage({ params }: { params: { id: string } } | { params: Promise<{ id: string }> }) {
  // Always resolve params as a Promise for compatibility
  const resolvedParams = await Promise.resolve(params);
  const paramId = String(resolvedParams.id).trim().toLowerCase();
  const opportunity = opportunities.find((o) => String(o.id).trim().toLowerCase() === paramId);
  if (!opportunity) {
    return <div>Opportunity not found.</div>;
  }
  return <OpportunityDetail opportunity={opportunity} />;
}
