type Props = {
  search: string;
  setSearch: (v: string) => void;
  type: string;
  setType: (v: string) => void;
  location: string;
  setLocation: (v: string) => void;
};

export default function SearchFilter({ search, setSearch, type, setType, location, setLocation }: Props) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <input
        type="text"
        placeholder="Search title or org..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="border px-3 py-2 rounded w-48"
      />
      <input
        type="text"
        placeholder="Type (e.g. Job, Internship)"
        value={type}
        onChange={e => setType(e.target.value)}
        className="border px-3 py-2 rounded w-40"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={e => setLocation(e.target.value)}
        className="border px-3 py-2 rounded w-40"
      />
    </div>
  );
}
