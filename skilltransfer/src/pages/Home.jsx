import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
     
      
      <section className="hero-section">
        <Header />
        {/* <div className="hero-background">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/df7f5d69607357d64790fa36d89ad91ad744c722?width=6015" 
            alt="" 
            className="hero-bg-image"
          />
        </div> */}
        
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">Transforming</span> Potential into Performance
          </h1>
          <p className="hero-description">
            SkillTransfer Academy empowers talent and businesses through expert coaching, smart recruitment, and efficient contracting solutions — helping you grow, connect, and succeed.
          </p>
          
          <div className="hero-images">
            <img src="personna1.png" alt="Team member" className="hero-image" />
            <img src="personna2.png" alt="Team member" className="hero-image" />
            <img src="personna3.png" alt="Team member" className="hero-image" />
            <img src="personna4.png" alt="Team member" className="hero-image" />
          </div>
        </div>
      
      </section>
      <section className="services-section">
        <h2 className="home-section-title">OUR SERVICES</h2>
        
        <div className="services-grid">
          <div className="service-card">
            <h3 className="service-title">Coaching</h3>
            <p className="service-description">Transform careers and leadership potential through tailored coaching programs.</p>
            <a href="/coaching" className="service-link">Learn More</a>
          </div>
          
          <div className="service-card">
            <h3 className="service-title">Talent Search</h3>
            <p className="service-description">Connect with exceptional professionals who fit your vision and culture.</p>
            <a href="/talent-search" className="service-link">Learn More</a>
          </div>
          
          <div className="service-card">
            <h3 className="service-title">Contract</h3>
            <p className="service-description">Build flexible, project-ready teams that scale with your business needs.</p>
            <a href="/contracting" className="service-link">Learn More</a>
          </div>
        </div>
      </section>
      <section className="why-choose-section">
        <div className="why-choose-bg">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/46b0ed5522e8d1471b5dcf9fc033509e87d8c60d?width=3456" 
            alt="" 
          />
        </div>
        
        <div className="why-choose-content">
          <h2 className="home-section-title">WHY CHOOSE US ?</h2>
          
          <div className="reasons-grid">
            <div className="reason-item">
              <span className="reason-number">01</span>
              <p className="reason-text">Expert coaches and recruitment specialists</p>
            </div>
            
            <div className="reason-item">
              <span className="reason-number">02</span>
              <p className="reason-text">Tailored strategies for every client</p>
            </div>
            
            <div className="reason-item">
              <span className="reason-number">03</span>
              <p className="reason-text">End-to-end talent solutions under one roof</p>
            </div>
            
            <div className="reason-item">
              <span className="reason-number">04</span>
              <p className="reason-text">Proven success across multiple industries</p>
            </div>
            
            <div className="reason-item">
              <span className="reason-number">05</span>
              <p className="reason-text">Commitment to transparency and results</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mission-section">
        <div className="mission-content">
          <h2 className="mission-title">OUR MISSION</h2>
          <p className="mission-text">
            <span className="quote-mark">"</span>To bridge the gap between talent and opportunity by creating a learning-driven ecosystem where businesses and individuals achieve excellence together.<span className="quote-mark"> "</span>
          </p>
        </div>
        
        <div className="stats-bars">
          <div className="stat-bar bar-1"></div>
          <div className="stat-bar bar-2"></div>
          <div className="stat-bar bar-3"></div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Home;
