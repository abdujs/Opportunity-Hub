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
    <article className="bg-white rounded-xl shadow-sm border border-blue-100 p-5 flex flex-col gap-2 hover:shadow-lg transition-all group">
      <header className="flex flex-wrap gap-2 items-center mb-1">
        {opportunity.featured && (
          <span className="bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-full text-xs font-semibold">Featured</span>
        )}
        {isLatest && (
          <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-semibold">Latest</span>
        )}
        {opportunity.verified && (
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold">Verified</span>
        )}
      </header>
      <h2 className="text-lg font-bold text-primary mb-0 group-hover:underline leading-tight">{opportunity.title}</h2>
      <div className="text-sm text-gray-500 mb-1 font-medium">{opportunity.organization}</div>
      <div className="flex flex-wrap gap-2 mb-1">
        {(opportunity.tags && opportunity.tags.length > 0)
          ? opportunity.tags.map((tag) => (
              <span key={tag} className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-full font-semibold border border-blue-100">{tag}</span>
            ))
          : <span className="text-xs text-gray-400">No tags</span>}
      </div>
      <div className="flex flex-row gap-2 text-gray-700 text-sm mb-1">
        <span>{opportunity.location}</span>
        <span className="text-xs text-gray-400">| Deadline: {opportunity.deadline}</span>
      </div>
      {opportunity.description && (
        <div className="text-gray-700 text-sm mb-1 line-clamp-3">{opportunity.description.slice(0, 180)}{opportunity.description.length > 180 ? '...' : ''}</div>
      )}
      <footer className="flex gap-2 mt-2">
        <Link
          href={`/opportunities/${opportunity.id}`}
          className="flex-1 inline-block text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary/10 text-center font-semibold shadow-sm transition-colors"
          aria-label={`Read full details: ${opportunity.title}`}
        >
          {opportunity.type === 'Internship' ? 'Internship Details' : 'Job Details'}
        </Link>
        {opportunity.link && (
          <a
            href={opportunity.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-block bg-primary text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-primary/90 transition-colors"
            aria-label={`Apply for ${opportunity.title}`}
          >
            Apply
          </a>
        )}
      </footer>
    </article>
  );
}
