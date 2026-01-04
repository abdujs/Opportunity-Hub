import Link from "next/link";

type Opportunity = {
  id: string;
  title: string;
  organization: string;
  location: string;
  type: string;
  tags?: string[];
  deadline: string;
  link?: string;
  verified?: boolean;
  featured?: boolean;
  source?: string;
  description?: string;
};

type OpportunityCardProps = {
  opportunity: Opportunity;
  isLatest?: boolean;
};

export default function OpportunityCard({ opportunity, isLatest }: OpportunityCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow border border-gray-100 group">
      <div>
        <div className="flex flex-wrap gap-2 mb-2 items-center">
          {opportunity.featured && (
            <span className="bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-full text-xs font-semibold">Featured</span>
          )}
          {isLatest && (
            <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-semibold">Latest</span>
          )}
          {opportunity.verified && (
            <span className="text-green-600 text-xs font-semibold">Verified</span>
          )}
        </div>
        <h2 className="text-xl font-bold text-primary mb-1 group-hover:underline">{opportunity.title}</h2>
        <div className="text-sm text-gray-500 mb-2">{opportunity.organization}</div>
        <div className="flex flex-wrap gap-2 mb-2">
          {(opportunity.tags && opportunity.tags.length > 0) ? opportunity.tags.map((tag) => (
            <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded">{tag}</span>
          )) : <span className="text-xs text-gray-400">No tags</span>}
        </div>
        <div className="text-gray-700 mb-2">{opportunity.location}</div>
        <div className="text-xs text-gray-400 mb-2">Deadline: {opportunity.deadline}</div>
        {/* Show a short description preview */}
        {opportunity.description && (
          <div className="text-gray-700 text-sm mb-2 line-clamp-3">{opportunity.description.slice(0, 180)}{opportunity.description.length > 180 ? '...' : ''}</div>
        )}
      </div>
      <div className="flex gap-2 mt-4">
        <Link
          href={`/opportunities/${opportunity.id}`}
          className="flex-1 inline-block text-primary border border-primary px-4 py-2 rounded hover:bg-primary/10 text-center font-semibold shadow-sm transition-colors"
          aria-label={`Read full details: ${opportunity.title}`}
        >
          {opportunity.type === 'Internship' ? 'Internship Details' : 'Job Details'}
        </Link>
        {opportunity.link && (
          <a
            href={opportunity.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-block bg-primary text-white px-4 py-2 rounded text-center font-semibold hover:bg-primary/90 transition-colors"
            aria-label={`Apply for ${opportunity.title}`}
          >
            Apply
          </a>
        )}
      </div>
    </div>
  );
}
