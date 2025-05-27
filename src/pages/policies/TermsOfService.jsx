import PolicyModal from "./PolicyModal";

const TermsOfService = () => (
  <PolicyModal title="Terms of Service">
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-semibold text-indigo-400 mb-4">1. Service Agreement</h3>
        <p>
          By engaging with VoxEdition Works, you agree to these terms. We provide creative and digital
          services including web development, graphic design, marketing strategy, and book publishing.
          All services are subject to project-specific agreements.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-indigo-400 mb-4">2. Intellectual Property Rights</h3>
        <div className="space-y-4">
          <p>Our intellectual property policies include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>All work remains our property until full payment is received</li>
            <li>Usage rights are specified in individual project agreements</li>
            <li>Clients retain ownership of their original content</li>
            <li>Our portfolio rights are retained unless explicitly waived</li>
          </ul>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-indigo-400 mb-4">3. Payment Terms</h3>
        <p>
          We require a 50% upfront deposit for all projects. Final payment is due upon project completion
          and before the transfer of deliverables. Late payments may incur additional fees.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-indigo-400 mb-4">4. Project Timeline</h3>
        <p>
          Project timelines are estimates and may vary based on complexity and client feedback. We are
          not responsible for delays caused by late client feedback or material submission.
        </p>
      </section>
    </div>
  </PolicyModal>
);

export default TermsOfService;