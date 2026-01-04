import opportunities from "../../../data/opportunities.json";
import OpportunityDetail from "../../../components/OpportunityDetail";

// Next.js 14+ app router: params may be a Promise
export default async function OpportunityDetailPage({ params }: { params: { id: string } }) {
  const paramId = String(params.id).trim().toLowerCase();
  const opportunity = opportunities.find((o) => String(o.id).trim().toLowerCase() === paramId);
  if (!opportunity) {
    return <div>Opportunity not found.</div>;
  }
  return <OpportunityDetail opportunity={opportunity} />;
}
