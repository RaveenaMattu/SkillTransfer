import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Coaching.css';

function Coaching() {
  return (
    <div className="coaching-page">
      <Header />
      
      <section className="coaching-hero">
        <div className="coaching-hero-content">
          <h1 className="coaching-hero-title">
            <span className="highlight">Empowering</span> Professionals Through Transformational Coaching
          </h1>
          <p className="coaching-hero-description">
            At SkillTransfer Agency, our coaching programs are built to inspire growth from within. Our expert coaches help you define goals, strengthen skills, and achieve measurable outcomes.
          </p>
          <button className="cta-btn" onClick={() => window.open("https://forms.gle/NygFY2QA3te5eXHG9", "_blank")}>Book Consultation</button>
        </div>
        <div className="coaching-hero-image">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/c874dad0e6a55b15fc31863d4ac08abc547972a6?width=1366" 
            alt="Coaching" 
          />
        </div>
      </section>
      
      <section className="what-we-offer-section dark-bg">
        <h2 className="section-title light-text">WHAT WE OFFER</h2>
        <p className="section-subtitle light-text">
          We follow a results-oriented, empathetic approach that combines personalized sessions, actionable insights, and measurable feedback. Our coaches use modern frameworks such as GROW and SMART goal-setting to ensure every session leads to progress and transformation.
        </p>
        
        <div className="coaching-services">
          <div className="coaching-service-card">
            <h3 className="coaching-service-title">Performance Coaching</h3>
            <p className="coaching-service-description">Boost productivity and achieve consistency through proven methodologies.</p>
          </div>
          
          <div className="coaching-service-card">
            <h3 className="coaching-service-title">Career Development</h3>
            <p className="coaching-service-description">Discover your strengths and align your goals with your career path.</p>
          </div>
          
          <div className="coaching-service-card">
            <h3 className="coaching-service-title">Leadership Coaching</h3>
            <p className="coaching-service-description">Develop strategic thinking, emotional intelligence, and decision-making.</p>
          </div>
        </div>
      </section>
      
      <section className="coaching-process-section">
        <div className="process-steps">
          <div className="process-step">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/6ab3717c6283979cee15c501abc0c1c8d138c8a1?width=200" 
              alt="Assess" 
              className="process-icon"
            />
            <h3 className="process-step-title">ASSESS</h3>
            <p className="process-step-description">
              We begin by understanding your current skills, challenges, and goals to identify growth opportunities.
            </p>
          </div>
          
          <div className="process-step">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/af83020b7f09ee468bc19493572380d6981d8c9f?width=200" 
              alt="Plan" 
              className="process-icon"
            />
            <h3 className="process-step-title">PLAN</h3>
            <p className="process-step-description">
              A personalized development roadmap is crafted, outlining clear objectives and strategies for success.
            </p>
          </div>
          
          <div className="process-step">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/6310d79a1909331d93f9d21a6485839c4f0262cc?width=200" 
              alt="Track" 
              className="process-icon"
            />
            <h3 className="process-step-title">TRACK</h3>
            <p className="process-step-description">
              Progress is continuously monitored and measured to ensure every session delivers measurable improvement.
            </p>
          </div>
          
          <div className="process-step">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/10e7881f777b0f82e5a19c2f169cda1c488ad4dc?width=200" 
              alt="Transform" 
              className="process-icon"
            />
            <h3 className="process-step-title">TRANSFORM</h3>
            <p className="process-step-description">
              Experience lasting change — enhanced confidence, refined skills, and performance that drives real results.
            </p>
          </div>
        </div>
        
        <div className="cta-section light-bg">
          <h2 className="cta-title">READY TO UNLOCK YOUR POTENTIAL?</h2>
          <p className="cta-description">
            Let's design a coaching journey that aligns with your vision for success. Take the first step toward personal and professional transformation today.
          </p>
          
          <div className="cta-buttons">
            <button className="cta-btn-secondary" onClick={() => window.open("/events")}>Access Our Free Resources</button>
            <button className="cta-btn-primary" onClick={() => window.open("https://forms.gle/NygFY2QA3te5eXHG9", "_blank")}>Schedule a Session</button>
            {/* <button className="cta-btn-primary">Download Brochure</button> */}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Coaching;
