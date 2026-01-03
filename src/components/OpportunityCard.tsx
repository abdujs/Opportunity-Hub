import Link from "next/link";

type Opportunity = {
  id: string;
  title: string;
  organization: string;
  location: string;
  type: string;
  tags: string[];
  deadline: string;
  verified: boolean;
  featured: boolean;
};

export default function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  return (
    <div className={`border rounded p-4 mb-4 shadow-sm ${opportunity.featured ? "border-yellow-400 bg-yellow-50" : "bg-white"}`}>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">
          <Link href={`/opportunities/${opportunity.id}`}>{opportunity.title}</Link>
        </h2>
        {opportunity.featured && <span className="text-xs bg-yellow-300 text-yellow-900 px-2 py-1 rounded">Featured</span>}
      </div>
      <div className="text-sm text-gray-600">{opportunity.organization} &middot; {opportunity.location}</div>
      <div className="flex flex-wrap gap-2 mt-2">
        {opportunity.tags.map(tag => (
          <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">{tag}</span>
        ))}
      </div>
      <div className="mt-2 text-xs text-gray-500">Deadline: {opportunity.deadline}</div>
      {opportunity.verified && <span className="inline-block mt-2 text-green-600 text-xs font-medium">Verified</span>}
    </div>
  );
}
