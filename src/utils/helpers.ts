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

type Filter = {
  search: string;
  type: string;
  location: string;
};

export function filterOpportunities(
  opportunities: Opportunity[],
  { search, type, location }: Filter
): Opportunity[] {
  return opportunities.filter((op) => {
    const matchesSearch =
      !search ||
      op.title.toLowerCase().includes(search.toLowerCase()) ||
      op.organization.toLowerCase().includes(search.toLowerCase());
    const matchesType = !type || op.type.toLowerCase().includes(type.toLowerCase());
    const matchesLocation = !location || op.location.toLowerCase().includes(location.toLowerCase());
    return matchesSearch && matchesType && matchesLocation;
  });
}
