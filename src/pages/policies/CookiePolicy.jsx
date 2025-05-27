import PolicyModal from "./PolicyModal";
import { Link } from "react-router-dom";

const CookiePolicy = () => (
  <PolicyModal title="Cookie Policy">
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-semibold text-indigo-400 mb-4">1. About Cookies</h3>
        <p className="space-y-4">
          <span className="block">
            Cookies are small text files stored on your device when you visit our website. They help us
            improve your browsing experience and provide personalized services.
          </span>
          <span className="block">
            For more information about your privacy, please review our{' '}
            <Link to="/privacy-policy" className="text-indigo-400 hover:text-indigo-300 underline">
              Privacy Policy
            </Link>.
          </span>
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-indigo-400 mb-4">2. Types of Cookies We Use</h3>
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <span className="font-medium text-white block mb-1">Essential Cookies:</span>
              <p>Required for basic website functionality and security. These cannot be disabled.</p>
            </li>
            <li>
              <span className="font-medium text-white block mb-1">Preference Cookies:</span>
              <p>Remember your settings and improve your experience on our website.</p>
            </li>
            <li>
              <span className="font-medium text-white block mb-1">Analytics Cookies:</span>
              <p>Help us understand how visitors use our site through anonymous data collection.</p>
            </li>
            <li>
              <span className="font-medium text-white block mb-1">Marketing Cookies:</span>
              <p>Used for targeted advertising in compliance with our{' '}
                <Link to="/terms" className="text-indigo-400 hover:text-indigo-300 underline">
                  Terms of Service
                </Link>.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-indigo-400 mb-4">3. Managing Cookies</h3>
        <div className="space-y-4">
          <p>
            You can control cookies through your browser settings. Different browsers have different controls:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Chrome: Settings → Privacy and Security → Cookies</li>
            <li>Firefox: Options → Privacy & Security → Cookies</li>
            <li>Safari: Preferences → Privacy → Cookies</li>
            <li>Edge: Settings → Privacy & Security → Cookies</li>
          </ul>
          <p className="text-yellow-300/80">
            Note: Disabling certain cookies may affect website functionality.
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-indigo-400 mb-4">4. Updates to This Policy</h3>
        <div className="space-y-4">
          <p>
            We may update this Cookie Policy periodically. Continue using our website to accept any
            changes. For questions about our cookie practices, please{' '}
            <Link to="/contact" className="text-indigo-400 hover:text-indigo-300 underline">
              contact us
            </Link>.
          </p>
          <p className="text-sm text-gray-400">
            Last updated: May 2024
          </p>
        </div>
      </section>
    </div>
  </PolicyModal>
);

export default CookiePolicy;