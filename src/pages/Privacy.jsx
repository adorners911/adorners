import { Helmet } from 'react-helmet-async'

export default function Privacy() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <Helmet>
        <title>Privacy Policy | Adorners</title>
        <meta name="description" content="Privacy policy for Adorners — how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://adorners.pk/privacy" />
      </Helmet>

      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <p className="font-sans text-xs tracking-[0.22em] uppercase text-brand mb-4">Legal</p>
        <h1 className="font-display font-light text-4xl md:text-5xl text-dark mb-10">Privacy Policy</h1>

        <div className="flex flex-col gap-8 font-sans text-sm text-dark/70 leading-relaxed">
          <section>
            <h2 className="font-sans font-medium text-base text-dark mb-3">1. Information We Collect</h2>
            <p>When you use our contact form, we collect your name, phone number, and any project details you provide. We do not collect payment information or create user accounts.</p>
          </section>

          <section>
            <h2 className="font-sans font-medium text-base text-dark mb-3">2. How We Use Your Information</h2>
            <p>We use the information you submit solely to respond to your enquiry and discuss your project. We do not sell, trade, or share your personal information with third parties except as required to process your request (e.g. our form processing provider, Web3Forms).</p>
          </section>

          <section>
            <h2 className="font-sans font-medium text-base text-dark mb-3">3. WhatsApp & Phone Communication</h2>
            <p>If you contact us via WhatsApp or phone, your conversation is subject to the respective platform's privacy policy. We use these channels only to communicate with you about your project.</p>
          </section>

          <section>
            <h2 className="font-sans font-medium text-base text-dark mb-3">4. Cookies & Analytics</h2>
            <p>This website does not currently use tracking cookies or analytics services. No personal data is stored in your browser by this site.</p>
          </section>

          <section>
            <h2 className="font-sans font-medium text-base text-dark mb-3">5. Data Retention</h2>
            <p>Enquiry data submitted through our contact form is retained only as long as necessary to respond to your request. You may request deletion of your data at any time by emailing us.</p>
          </section>

          <section>
            <h2 className="font-sans font-medium text-base text-dark mb-3">6. Contact</h2>
            <p>For any privacy-related questions, contact us at <a href="https://mail.google.com/mail/?view=cm&to=hello@adorners.pk" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">hello@adorners.pk</a> or WhatsApp <a href="https://wa.me/923273273667" className="text-brand hover:underline">0327 3273667</a>.</p>
          </section>

          <p className="text-xs text-dark/40 pt-4 border-t border-gray-100">Last updated: May 2026</p>
        </div>
      </div>
    </div>
  )
}
