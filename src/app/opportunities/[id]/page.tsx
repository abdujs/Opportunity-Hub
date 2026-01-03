import opportunities from "../../../data/opportunities.json";
import OpportunityDetail from "../../../components/OpportunityDetail";

export default function OpportunityDetailPage({ params }: { params: { id: string } }) {
  const opportunity = opportunities.find((o) => o.id === params.id);
  if (!opportunity) {
    return <div>Opportunity not found.</div>;
  }
  return <OpportunityDetail opportunity={opportunity} />;
}
