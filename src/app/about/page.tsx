export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">About Opportunity Hub</h1>
      <p className="mb-4">Opportunity Hub is a curated platform aggregating jobs, scholarships, internships, and events for Ethiopians. We verify and centralize opportunities to save you time and help you grow your career.</p>
      <p className="mb-4">Join our <a href="https://t.me/opp_hub" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Telegram community</a> for updates and discussions.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Contact</h2>
      <p>For questions or to submit an opportunity, email <a href="mailto:info@opphub.et" className="text-blue-600 underline">info@opphub.et</a> or use our <a href="/submit" className="text-blue-600 underline">submission form</a>.</p>
    </div>
  );
}
