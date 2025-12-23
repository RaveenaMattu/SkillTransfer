import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const contactRef = useRef(null);

  // Close contact dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        contactRef.current &&
        !contactRef.current.contains(e.target)
      ) {
        setContactOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="The SkillTransfer Agency" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className={`main-nav ${menuOpen ? "show" : ""}`}>
          <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/coaching" className="nav-link" onClick={() => setMenuOpen(false)}>
            Coaching
          </NavLink>
          <NavLink to="/talent-search" className="nav-link" onClick={() => setMenuOpen(false)}>
            Talent Search
          </NavLink>
          <NavLink to="/contracting" className="nav-link" onClick={() => setMenuOpen(false)}>
            Contracting
          </NavLink>
          <NavLink to="/events" className="nav-link" onClick={() => setMenuOpen(false)}>
            Free Resources & Events
          </NavLink>
        </nav>

        {/* Right actions */}
        <div className="header-actions">
          {/* Contact Dropdown */}
          <div className="contact-dropdown" ref={contactRef}>
            <button
              className="contact-btn"
              onClick={() => setContactOpen((prev) => !prev)}
            >
              Contact
            </button>

            {contactOpen && (
              <div className="dropdown-menu">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeOEyWXNlGZOCKc_tnWyYBEaN5vmqwGFOZApB09YjJlA5gGYg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setContactOpen(false)}
                >
                  Job Seeker
                </a>
                <a
                  href="https://forms.gle/3kdqp5haJJMneg1z9"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setContactOpen(false)}
                >
                  Business
                </a>
              </div>
            )}
          </div>

          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
