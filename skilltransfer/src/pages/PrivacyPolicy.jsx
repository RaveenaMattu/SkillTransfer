import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <Header />

      {/* Content */}
      <main className="privacy-content">
        <h1>Privacy Policy</h1>
        <p className="updated-date">Last updated: December 23, 2025</p>

        <section>
          <p>
            The SkillTransfer Agency (“we,” “our,” or “us”) is committed to
            protecting your privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you
            visit our website or engage with our services.
          </p>
        </section>

        <section>
          <h2>1. Information We Collect</h2>

          <h3>Personal Information</h3>
          <p>
            When you voluntarily submit information through forms (such as
            contact forms, registrations, or Google Forms), we may collect:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Professional details (resume, skills, experience)</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h3>Non-Personal Information</h3>
          <p>
            We may automatically collect technical data such as browser type,
            device information, pages visited, and access timestamps for
            analytics and performance improvements.
          </p>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>Respond to inquiries and requests</li>
            <li>Provide coaching, recruitment, or contracting services</li>
            <li>Share relevant resources or event information</li>
            <li>Improve website performance and usability</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2>3. Third-Party Services</h2>
          <p>
            We may use trusted third-party tools including Google Forms, Google
            Calendar, Google Drive, and analytics services. These providers
            manage data according to their own privacy policies.
          </p>
        </section>

        <section>
          <h2>4. Data Sharing</h2>
          <p>
            We do not sell or rent personal information. Data may be shared only
            when legally required or necessary to deliver services.
          </p>
        </section>

        <section>
          <h2>5. Data Security</h2>
          <p>
            We implement reasonable safeguards to protect your information, but
            no online system can guarantee complete security.
          </p>
        </section>

        <section>
          <h2>6. Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your data, or
            withdraw consent at any time by contacting us.
          </p>
        </section>

        <section>
          <h2>7. External Links</h2>
          <p>
            Our website may include links to third-party sites. We are not
            responsible for their privacy practices.
          </p>
        </section>

        <section>
          <h2>8. Children’s Privacy</h2>
          <p>
            Our services are not intended for children under 13. We do not
            knowingly collect information from minors.
          </p>
        </section>

        <section>
          <h2>9. Policy Updates</h2>
          <p>
            We may update this Privacy Policy periodically. Updates will be
            posted on this page with a revised date.
          </p>
        </section>

        <section>
          <h2>10. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            at:
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

export default PrivacyPolicy;
