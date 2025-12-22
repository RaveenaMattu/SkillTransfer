import React, { useState, useRef, useEffect } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const actionsRef = useRef(null);

  // Close menu & dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        navRef.current &&
        !navRef.current.contains(e.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        actionsRef.current &&
        !actionsRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
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
          <img src="logo.png" alt="The SkillTransfer Academy" />
        </div>

        {/* Navigation */}
        <nav
          ref={navRef}
          className={`main-nav ${menuOpen ? "show" : ""}`}
        >
          {[
            { path: "/", label: "About" },
            { path: "/coaching", label: "Coaching" },
            { path: "/talent-search", label: "Talent Search" },
            { path: "/contracting", label: "Contracting" },
            { path: "/events", label: "Free Resources & Events" },
          ].map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`nav-link ${
                window.location.pathname === item.path ? "active" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="header-actions" ref={actionsRef}>
          {/* Contact Dropdown */}
          <div className="contact-dropdown" ref={dropdownRef}>
            <button
              className="contact-btn"
              onClick={() => setContactOpen(!contactOpen)}
            >
              Contact
            </button>

            {contactOpen && (
              <div className="dropdown-menu">
                <a
                  href="https://forms.gle/NygFY2QA3te5eXHG9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Job Seeker
                </a>
                <a
                  href="https://forms.gle/3kdqp5haJJMneg1z9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Business
                </a>
              </div>
            )}
          </div>

          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
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
