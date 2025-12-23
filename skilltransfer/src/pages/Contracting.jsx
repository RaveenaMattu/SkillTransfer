import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Contracting.css';

function Contracting() {
  return (
    <div className="contracting-page">
      <Header />
      
      <section className="contracting-hero">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/f17900bbee5b168fa3b61247591a794556940398?width=3456" 
          alt="Contracting" 
          className="contracting-hero-bg"
        />
        <div className="contracting-hero-overlay"></div>
        
        <div className="contracting-hero-content">
          <h1 className="contracting-hero-title">
            <span className="primary-text">Flexible</span> <span className="highlight">Workforce Solutions</span> <span className="primary-text">for Modern Businesses</span>
          </h1>
          <p className="contracting-hero-description">
            Adapt to changing business demands with confidence. SkillTransfer Academy provides contract-based staffing solutions that give you access to skilled professionals when and where you need them most.
          </p>
          <button className="contracting-cta-btn" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSd8-T8CgOMOO0EOM2UiRrvYYupYbsnkwC1fskut-Cvdy2pRnA/viewform", "_blank")}>Hire Contract Talent | Request a Quote</button>
        </div>
      </section>
      
      <section className="what-we-offer-contracting">
        <h2 className="section-title">WHAT WE OFFER</h2>
        
        <div className="offer-content">
          <div className="offer-left">
            <h3 className="content-title">Contract Staffing That Works for You</h3>
          </div>
          <div className="offer-right">
            <p className="content-description">
              Whether you're facing a short-term project, a seasonal spike, or specialized technical needs, our contract hiring model ensures you get the right talent without long-term commitments. We handle everything — from sourcing and vetting to onboarding and compliance — so you can focus on your business goals.
            </p>
          </div>
        </div>
        
        <div className="contracting-services-grid">
          <div className="contracting-service-card">
            <h3 className="contracting-service-title">Short-Term Contracts</h3>
            <p className="contracting-service-description">Quickly fill temporary or project-based roles with skilled professionals.</p>
          </div>
          
          <div className="contracting-service-card">
            <h3 className="contracting-service-title">Contract-to-Hire</h3>
            <p className="contracting-service-description">Evaluate performance before making permanent hiring decisions.</p>
          </div>
          
          <div className="contracting-service-card">
            <h3 className="contracting-service-title">Managed Services</h3>
            <p className="contracting-service-description">Let us oversee your contract workforce to ensure seamless project execution.</p>
          </div>
        </div>
      </section>
      
      <section className="contracting-process-section">
        <h2 className="section-title">CONTRACTING PROCESS</h2>
        
        <div className="contracting-process-grid">
          <div className="contracting-process-step">
            <span className="process-step-number">01</span>
            <div className="process-step-content">
              <h4 className="process-step-title">Consult</h4>
              <p className="process-step-description">We understand your staffing needs, project goals, and timelines.</p>
            </div>
          </div>
          
          <div className="contracting-process-step">
            <span className="process-step-number">02</span>
            <div className="process-step-content">
              <h4 className="process-step-title">Source</h4>
              <p className="process-step-description">Our experts identify and screen qualified professionals from our network.</p>
            </div>
          </div>
          
          <div className="contracting-process-step">
            <span className="process-step-number">03</span>
            <div className="process-step-content">
              <h4 className="process-step-title">Deploy</h4>
              <p className="process-step-description">Selected talent is onboarded quickly to keep your operations moving.</p>
            </div>
          </div>
          
          <div className="contracting-process-step">
            <span className="process-step-number">04</span>
            <div className="process-step-content">
              <h4 className="process-step-title">Manage</h4>
              <p className="process-step-description">We monitor performance and provide administrative support.</p>
            </div>
          </div>
          
          <div className="contracting-process-step">
            <span className="process-step-number">05</span>
            <div className="process-step-content">
              <h4 className="process-step-title">Scale</h4>
              <p className="process-step-description">Adjust workforce size and skills as your project evolves.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="why-partner-section">
        <div className="why-partner-bg">
          <img 
            src="step2.png" 
            alt="" 
          />
        </div>
        
        <div className="why-partner-content">
          <h2 className="section-title light-text">WHY PARTNER WITH US</h2>
          
          <ul className="benefits-list">
            <li>Access to a vetted pool of skilled contractors</li>
            <li>Rapid response time for urgent requirements</li>
            <li>Full compliance with employment and labor standards</li>
            <li>Transparent communication and flexible engagement models</li>
            <li>End-to-end workforce management</li>
          </ul>
        </div>
      </section>
      
      <section className="flexible-team-section">
        <div className="flexible-team-content">
          <h2 className="flexible-team-title">Build A Flexible Team That Grows With You</h2>
          <p className="flexible-team-description">
            Whether you need one specialist or an entire project team, SkillTransfer Academy simplifies contract staffing with speed, precision, and trust. Let's work together to bring your goals to life.
          </p>
        </div>
        
        <div className="flexible-team-buttons">
          <button className="team-btn-secondary" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSd8-T8CgOMOO0EOM2UiRrvYYupYbsnkwC1fskut-Cvdy2pRnA/viewform", "_blank")}>Request Talent</button>
          {/* <button className="team-btn-primary">Book Consultation</button> */}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Contracting;
