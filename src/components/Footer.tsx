export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-8 text-sm text-gray-500">
      <div>
        &copy; {new Date().getFullYear()} Opportunity Hub. All rights reserved.
      </div>
      <div>
        <a href="https://t.me/opp_hub" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">Join our Telegram</a>
      </div>
    </footer>
  );
}
