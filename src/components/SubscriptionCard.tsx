export default function SubscriptionCard() {
	return (
		<div className="w-full flex justify-center mt-0 px-2">
			<div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
				<script async src="https://subscribe-forms.beehiiv.com/embed.js"></script>
				<iframe
					src="https://subscribe-forms.beehiiv.com/15b1b7f1-3372-4d51-9bbb-279f6a750c39"
					className="beehiiv-embed w-full"
					data-test-id="beehiiv-embed"
					frameBorder="0"
					scrolling="no"
					style={{ height: 320, minHeight: 220, margin: 0, borderRadius: 12, backgroundColor: 'transparent', boxShadow: '0 0 #0000', maxWidth: '100%' }}
					title="Subscribe to Opportunity Hub"
				></iframe>
			</div>
		</div>
	);
}

