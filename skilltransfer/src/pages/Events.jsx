import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Events.css";

const RESOURCES_SHEET = process.env.REACT_APP_RESOURCE_SHEET_LINK;
const CALENDAR_ID = process.env.REACT_APP_GOOGLE_CALENDAR_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const REGISTER_URL = process.env.REACT_APP_GOOGLE_REGISTER_FORM_URL;

function Events() {
  const [resources, setResources] = useState([]);
  const [events, setEvents] = useState([]);
  const [loadingResources, setLoadingResources] = useState(true);
  const [loadingEvents, setLoadingEvents] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedResourceLink, setSelectedResourceLink] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetch(RESOURCES_SHEET)
      .then((res) => res.json())
      .then((data) => {
        setResources(data.filter((r) => r.Visible?.toLowerCase() === "yes"));
        setLoadingResources(false);
      })
      .catch(() => setLoadingResources(false));
  }, []);

  useEffect(() => {
    const now = new Date().toISOString();
    fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
        CALENDAR_ID
      )}/events?key=${API_KEY}&timeMin=${now}&singleEvents=true&orderBy=startTime`
    )
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.items || []);
        setLoadingEvents(false);
      })
      .catch(() => setLoadingEvents(false));
  }, []);

  const formatEventDate = (event) => {
    const dateStr = event.start.dateTime || event.start.date;
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
    });
  };

  const handleResourceClick = (link) => {
    setSelectedResourceLink(link);
    setModalOpen(true);
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true);

  // 1. Google Form "Response" URL (Replace the ID)
const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScdcRb27NWrU26Yz5ZMtJotLqdiDbN9o4p3aj1MGpX-25O62Q/formResponse";

  // 2. Mapping data to the Google Form Entry IDs
  const formData = new FormData();
  formData.append("entry.943401780", email);    // Email entry ID
  formData.append("entry.1092734516", phone);    // Phone entry ID
  formData.append("entry.450229612", selectedResourceLink); // Link entry ID

  try {
    // 3. Submitting silently in the background
    await fetch(FORM_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData
    });

    setModalOpen(false);
    setEmail("");
    setPhone("");
    
    // Redirect the user to the actual resource
    window.open(selectedResourceLink, "_blank");

  } catch (err) {
    console.error("Submission failed", err);
    // Even if it fails, redirect anyway 
    window.open(selectedResourceLink, "_blank");
  } finally {
    setSubmitting(false);
  }
};  return (
    <div className="events-page">
      <Header />

      <section className="events-layout">
        <aside className="resources-section">
          <h2>Free Resources</h2>
          {loadingResources && <p>Loading resources...</p>}
          {!loadingResources && resources.length === 0 && (
            <p>No resources available.</p>
          )}
          {resources.map((r, index) => (
            <div className="resource-row" key={index}>
              <span className="resource-title">{r.Title}</span>
              <button
                onClick={() => handleResourceClick(r.FileLink)}
                className="resource-link"
              >
                View / Download
              </button>
            </div>
          ))}
        </aside>

        <div className="calendar-section">
          <h2>Upcoming Events</h2>
          <div className="calendar-wrapper">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=theskilltransferagency%40gmail.com&ctz=America%2FToronto"
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              title="Events Calendar"
            />
          </div>

          <div className="events-list">
            {loadingEvents && <p>Loading events...</p>}
            {!loadingEvents && events.length === 0 && (
              <p>No upcoming events.</p>
            )}
            {events.map((event) => (
              <div className="event-card" key={event.id}>
                <span className="event-date">{formatEventDate(event)}</span>
                <span className="event-title">{event.summary}</span>
                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="register-btn"
                >
                  Register
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Enter your details to access the resource</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
              />
              <div style={{ marginTop: "10px" }}>
                <button type="submit" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit & Access"}
                </button>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Events;
