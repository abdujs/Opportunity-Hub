export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-4">About Opportunity Hub</h1>
      <p className="mb-4">Opportunity Hub is Ethiopia’s go-to platform for discovering curated jobs, scholarships, internships, fellowships, and career resources. Our mission is to empower Ethiopians and African youth by making high-quality opportunities accessible, transparent, and easy to find.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Our Mission</h2>
      <p className="mb-4">We believe everyone deserves a fair chance to grow. We verify and centralize opportunities from trusted sources, saving you time and helping you take the next step in your career or education.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">What We Offer</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Curated job listings, scholarships, internships, and events</li>
        <li>Career articles and resources to help you succeed</li>
        <li>Community support via our <a href="https://t.me/oportunity_hub" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Telegram channel</a></li>
        <li>Easy submission of new opportunities</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">Contact</h2>
      <p>For questions, feedback, or to submit an opportunity, email <a href="mailto:info@opportunityhub.com" className="text-blue-600 underline">info@opportunityhub.com</a> or use our <a href="/submit" className="text-blue-600 underline">submission form</a>.</p>
    </div>
  );
}
