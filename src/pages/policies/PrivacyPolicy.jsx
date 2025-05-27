import PolicyModal from "./PolicyModal";

const PrivacyPolicy = () => (
  <PolicyModal title="Privacy Policy">
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-semibold text-indigo-400 mb-4">1. Information We Collect</h3>
        <div className="space-y-4">
          <p>At VoxEdition Works, we collect information to provide better services to our clients:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Information you provide directly (name, email, phone number)</li>
            <li>Project requirements and preferences</li>
            <li>Communication history and feedback</li>
            <li>Usage data from our website and services</li>
          </ul>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-indigo-400 mb-4">2. How We Use Your Information</h3>
        <div className="space-y-4">
          <p>We use the collected information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Deliver and improve our services</li>
            <li>Communicate project updates and relevant information</li>
            <li>Provide customer support</li>
            <li>Send important updates about our services</li>
          </ul>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-indigo-400 mb-4">3. Data Protection</h3>
        <p>
          We implement industry-standard security measures to protect your data. This includes encryption,
          secure servers, and regular security audits. We never share your personal information with
          third parties without your explicit consent.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-indigo-400 mb-4">4. Your Rights</h3>
        <p>
          You have the right to access, correct, or delete your personal information. Contact us at
          privacy@voxedition.com to exercise these rights or learn more about our privacy practices.
        </p>
      </section>
    </div>
  </PolicyModal>
);

export default PrivacyPolicy;