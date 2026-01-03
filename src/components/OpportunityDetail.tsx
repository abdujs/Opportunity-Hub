type Opportunity = {
  id: string;
  title: string;
  organization: string;
  location: string;
  type: string;
  tags: string[];
  deadline: string;
  link: string;
  verified: boolean;
  featured: boolean;
  source: string;
};

export default function OpportunityDetail({ opportunity }: { opportunity: Opportunity }) {
  return (
    <div className="border rounded p-6 bg-white shadow">
      <h1 className="text-2xl font-bold mb-2">{opportunity.title}</h1>
      <div className="text-gray-700 mb-1">{opportunity.organization} &middot; {opportunity.location}</div>
      <div className="flex flex-wrap gap-2 mb-2">
        {opportunity.tags.map(tag => (
          <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">{tag}</span>
        ))}
      </div>
      <div className="mb-2 text-sm">Type: {opportunity.type}</div>
      <div className="mb-2 text-sm">Deadline: {opportunity.deadline}</div>
      <div className="mb-2 text-sm">Source: {opportunity.source}</div>
      {opportunity.verified && <span className="inline-block mb-2 text-green-600 text-xs font-medium">Verified</span>}
      {opportunity.featured && <span className="inline-block mb-2 ml-2 text-yellow-700 bg-yellow-200 px-2 py-1 rounded text-xs">Featured</span>}
      <a href={opportunity.link} target="_blank" rel="noopener noreferrer" className="block mt-4 bg-blue-600 text-white px-4 py-2 rounded text-center font-semibold hover:bg-blue-700">Apply / Learn More</a>
      <a href="https://t.me/opp_hub" target="_blank" rel="noopener noreferrer" className="block mt-2 text-blue-600 underline text-center">Share to Telegram</a>
    </div>
  );
}
