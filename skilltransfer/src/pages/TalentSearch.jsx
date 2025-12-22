import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./TalentSearch.css";

function TalentSearch() {
  return (
    <div className="talent-search-page">
      <Header />

      <section className="talent-hero">
        <div className="talent-hero-content">
          <h1 className="talent-hero-title">
            <span className="highlight">Connecting</span> Exceptional Talent
            with Exceptional Opportunities
          </h1>
          <p className="talent-hero-description">
            At SkillTransfer Academy, we go beyond recruitment — we build
            partnerships. Our talent search solutions are designed to help
            organizations attract, evaluate, and retain the professionals who
            drive growth and innovation.
          </p>
          <button
            className="talent-cta-btn"
            onClick={() =>
              window.open("https://forms.gle/3kdqp5haJJMneg1z9", "_blank")
            }
          >
            Find Talent
          </button>
        </div>
        <img
          src="talentSearchHeader.jpg"
          alt="Talent Search"
          className="talent-hero-image"
        />
      </section>

      <section className="what-we-do-section">
        <h2 className="section-title">WHAT WE DO</h2>

        <div className="what-we-do-content">
          <div className="what-we-do-left">
            <h3 className="content-title">
              Strategic Talent Search That Delivers Results
            </h3>
          </div>
          <div className="what-we-do-right">
            <p className="content-description">
              We specialize in identifying high-performing professionals who
              align with your company's goals, culture, and future vision.
              Whether you're hiring for permanent positions, project-based
              roles, or executive leadership, our team ensures the right fit
              every time.
            </p>
          </div>
        </div>

        <div className="talent-services-grid">
          <div className="talent-service-card">
            <h3 className="talent-service-title">Permanent Recruitment</h3>
            <p className="talent-service-description">
              Find long-term, high-impact professionals for your organization.
            </p>
          </div>

          <div className="talent-service-card">
            <h3 className="talent-service-title">Executive Search</h3>
            <p className="talent-service-description">
              Connect with leaders who inspire innovation and transformation.
            </p>
          </div>

          <div className="talent-service-card">
            <h3 className="talent-service-title">Specialized Hiring</h3>
            <p className="talent-service-description">
              Source niche talent across industries and technical domains.
            </p>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="process-bg">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/13f3548ca89ff56f7e5f993c583466139ede8f06?width=8470"
            alt=""
          />
        </div>

        <div className="process-content">
          <h2 className="section-title">OUR PROCESS</h2>

          <div className="process-intro">
            <h3 className="content-title">How We Find the Right Fit</h3>
            <p className="content-description">
              Our proven, data-informed process ensures we deliver not just
              candidates — but the right candidates, who align with your mission
              and contribute to your long-term success.
            </p>
          </div>

          <div className="process-steps-grid">
            <div className="process-step-item">
              <div className="step-header">
                <span className="step-number">01</span>
                <div className="step-info">
                  <h4 className="step-title">Consultation</h4>
                  <p className="step-description">
                    Understanding your business and role requirements.
                  </p>
                </div>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a20b2ecc62b02c23ee30254352ad402d35aae732?width=888"
                alt="Consultation"
                className="step-image"
              />
            </div>

            <div className="process-step-item">
              <div className="step-header">
                <span className="step-number">02</span>
                <div className="step-info">
                  <h4 className="step-title">Talent Mapping</h4>
                  <p className="step-description">
                    Identifying ideal candidates through our professional
                    network.
                  </p>
                </div>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/622faaa938e20a3430e10caca69f3f32c9c8003d?width=888"
                alt="Talent Mapping"
                className="step-image"
              />
            </div>

            <div className="process-step-item">
              <div className="step-header">
                <span className="step-number">03</span>
                <div className="step-info">
                  <h4 className="step-title">Screening & Assessment</h4>
                  <p className="step-description">
                    Evaluating skills, values, and leadership potential
                  </p>
                </div>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/af7c4ef30d6ae60d8863ea2406065e8589a1109c?width=888"
                alt="Screening"
                className="step-image"
              />
            </div>

            <div className="process-step-item">
              <div className="step-header">
                <span className="step-number">04</span>
                <div className="step-info">
                  <h4 className="step-title">Presentation & Feedback</h4>
                  <p className="step-description">
                    Shortlisting candidates who truly match your needs.
                  </p>
                </div>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/18175721f5b6bf9cd7e667685f605e68a5029250?width=642"
                alt="Feedback"
                className="step-image"
              />
            </div>

            <div className="process-step-item">
              <div className="step-header">
                <span className="step-number">05</span>
                <div className="step-info">
                  <h4 className="step-title">Onboarding Support</h4>
                  <p className="step-description">
                    Ensuring a smooth integration for long-term success.
                  </p>
                </div>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/4f4cc4b60d701618f2b000b92322302020d05609?width=650"
                alt="Support"
                className="step-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="industries-section">
        <h2 className="section-title light-text">INDUSTRIES WE SERVE</h2>
        <p className="section-subtitle light-text">
          We partner with diverse industries to deliver skilled professionals
          who drive impact and innovation. Our recruitment experts understand
          the unique needs of each sector — ensuring the right talent connects
          with the right opportunity, every time.
        </p>

        <div className="industries-grid">
          <div className="industry-item">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0edd0a866ea487323b4f94ddd2fbedd8066da065?width=240"
              alt="Technology & IT"
              className="industry-icon"
            />
            <h3 className="industry-title">Technology & IT</h3>
          </div>

          <div className="industry-item">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5f2372374b2ac1d7cee3120262a86cecbe908482?width=240"
              alt="Supply Chain"
              className="industry-icon"
            />
            <h3 className="industry-title">Supply Chain</h3>
          </div>

          <div className="industry-item">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b37a74ab8225292b43256be8a62b88b9e6ee97db?width=240"
              alt="Manufacturing"
              className="industry-icon"
            />
            <h3 className="industry-title">Manufacturing</h3>
          </div>

          <div className="industry-item">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/1615ed5c81c738d5190c43880790085f00468181?width=240"
              alt="Healthcare"
              className="industry-icon"
            />
            <h3 className="industry-title">Healthcare</h3>
          </div>
        </div>
      </section>

      <section className="partner-section">
        <div className="partner-content">
          <h2 className="partner-title">Partner With Us</h2>
          <p className="partner-description">
            Partner with SkillTransfer Academy to gain a recruitment advantage
            that goes beyond traditional hiring. We connect you with people who
            not only have the right skills but also the passion and vision to
            help your business grow.
          </p>
        </div>

        <div className="partner-buttons">
          {/* <button className="partner-btn-secondary">Post a Job</button> */}
          <button className="partner-btn-primary">Schedule a Session</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default TalentSearch;
