export default function SubmitPage() {
  return (
    <div className="max-w-xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Submit an Opportunity</h1>
      <p className="mb-4">Use the form below to submit a job, scholarship, or event. We review all submissions before publishing.</p>
      <iframe
        src="https://tally.so/r/your-form-id"
        width="100%"
        height="500"
        frameBorder="0"
        title="Submit Opportunity"
        className="rounded border"
      ></iframe>
      <p className="mt-4 text-sm text-gray-500">Powered by Tally.so</p>
    </div>
  );
}
