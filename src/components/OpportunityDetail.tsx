type Opportunity = {
  id: string;
  title: string;
  organization: string;
  location: string;
  type: string;
  tags: string[];
  deadline: string;
  link?: string;
  verified: boolean;
  featured: boolean;
  source: string;
  description?: string;
};

import Link from "next/link";

export default function OpportunityDetail({ opportunity }: { opportunity: Opportunity }) {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-8 mt-8">
      <Link href="/opportunities" className="text-blue-600 hover:underline text-sm mb-4 inline-block">&larr; Back to Opportunities</Link>
      <h1 className="text-3xl font-bold mb-2 text-primary leading-tight">{opportunity.title}</h1>
      <div className="text-gray-700 mb-1 text-lg font-medium">{opportunity.organization} &middot; {opportunity.location}</div>
      <div className="flex flex-wrap gap-2 mb-2">
        {(opportunity.tags && opportunity.tags.length > 0) ? opportunity.tags.map(tag => (
          <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-semibold">{tag}</span>
        )) : <span className="text-xs text-gray-400">No tags</span>}
      </div>
      <div className="mb-2 text-sm">Type: <span className="font-semibold">{opportunity.type}</span></div>
      <div className="mb-2 text-sm">Deadline: <span className="font-semibold">{opportunity.deadline}</span></div>
      <div className="mb-2 text-sm">Source: <span className="font-semibold">{opportunity.source}</span></div>
      <div className="mb-4">
        {opportunity.verified && <span className="inline-block mr-2 text-green-600 text-xs font-medium">Verified</span>}
        {opportunity.featured && <span className="inline-block text-yellow-700 bg-yellow-200 px-2 py-1 rounded text-xs font-semibold">Featured</span>}
      </div>
      {/* Job Description and Requirements */}
      {opportunity.description && (
        <div className="prose prose-blue max-w-none mb-6 whitespace-pre-line text-gray-800">
          {opportunity.description}
        </div>
      )}
      {/* Application Link Underneath Details */}
      <div className="mt-8 flex justify-center">
        {opportunity.link && opportunity.link.trim() !== "" ? (
          <a
            href={opportunity.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-bold shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors duration-150"
            aria-label={`Apply for ${opportunity.title}`}
            tabIndex={0}
          >
            Apply Now
          </a>
        ) : (
          <span className="text-gray-400 italic">No application link provided.</span>
        )}
      </div>
    </div>
  );
}
