import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./TermsOfService.css";

function TermsOfService() {
  return (
    <div className="terms-page">
      <Header />

      {/* Content */}
      <main className="terms-content">
        <h1>Terms of Service</h1>
        <p className="updated-date">Last updated: December 23, 2025</p>

        <section>
          <p>
            These Terms of Service (“Terms”) govern your access to and use of the
            website and services provided by The SkillTransfer Agency (“we,”
            “our,” or “us”). By accessing or using our website or services, you
            agree to be bound by these Terms.
          </p>
        </section>

        <section>
          <h2>1. Services</h2>
          <p>
            The SkillTransfer Agency provides career coaching, recruitment,
            contracting support, learning resources, and related professional
            services. Services may change or be updated at any time without
            notice.
          </p>
        </section>

        <section>
          <h2>2. Eligibility</h2>
          <p>
            You must be at least 18 years old to use our services. By using this
            website, you confirm that you meet this requirement.
          </p>
        </section>

        <section>
          <h2>3. User Responsibilities</h2>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Use services only for lawful purposes</li>
            <li>Not misuse or interfere with website functionality</li>
            <li>Respect intellectual property and confidentiality</li>
          </ul>
        </section>

        <section>
          <h2>4. No Guarantees</h2>
          <p>
            While we strive to provide high-quality coaching and recruitment
            outcomes, we do not guarantee employment, job offers, business
            results, or specific outcomes.
          </p>
        </section>

        <section>
          <h2>5. Payments & Fees</h2>
          <p>
            Certain services may require payment. Fees, payment terms, and
            refund policies will be communicated before engagement.
          </p>
        </section>

        <section>
          <h2>6. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos,
            resources, and materials, is the property of The SkillTransfer
            Agency and may not be copied, reproduced, or distributed without
            prior written consent.
          </p>
        </section>

        <section>
          <h2>7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party platforms such as
            Google Forms, Google Drive, or external event platforms. We are not
            responsible for the content or policies of these services.
          </p>
        </section>

        <section>
          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, The SkillTransfer Agency
            shall not be liable for any indirect, incidental, or consequential
            damages arising from the use of our services or website.
          </p>
        </section>

        <section>
          <h2>9. Termination</h2>
          <p>
            We reserve the right to suspend or terminate access to services if
            these Terms are violated.
          </p>
        </section>

        <section>
          <h2>10. Changes to Terms</h2>
          <p>
            We may update these Terms at any time. Continued use of the website
            constitutes acceptance of revised Terms.
          </p>
        </section>

        <section>
          <h2>11. Governing Law</h2>
          <p>
            These Terms shall be governed by and interpreted in accordance with
            the laws of Canada, without regard to conflict of law principles.
          </p>
        </section>

        <section>
          <h2>12. Contact Information</h2>
          <p>
            For questions regarding these Terms, please contact:
          </p>
          <p>
            <strong>The SkillTransfer Agency</strong>
            <br />
            Email: theskilltransferagency@gmail.com
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default TermsOfService;
