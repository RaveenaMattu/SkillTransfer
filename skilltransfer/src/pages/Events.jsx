import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Events.css";

const RESOURCES_SHEET =
  "https://opensheet.elk.sh/1fgMd-NbDAC6D9Oc6DKeOY1c4DxK85fa9nWVQcJTq9Ss/Sheet1";
const CALENDAR_ID = "theskilltransferagency@gmail.com";
const API_KEY = "AIzaSyC7CDnaXWOO3STqrwwF7yazaoIcdJ6Zwn0";
const REGISTER_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeOEyWXNlGZOCKc_tnWyYBEaN5vmqwGFOZApB09YjJlA5gGYg/viewform";

function Events() {
  const [resources, setResources] = useState([]);
  const [events, setEvents] = useState([]);
  const [loadingResources, setLoadingResources] = useState(true);
  const [loadingEvents, setLoadingEvents] = useState(true);

  // Fetch resources (Google Sheets)
  useEffect(() => {
    fetch(RESOURCES_SHEET)
      .then((res) => res.json())
      .then((data) => {
        setResources(data.filter((r) => r.Visible?.toLowerCase() === "yes"));

        setLoadingResources(false);
      })
      .catch(() => setLoadingResources(false));
  }, []);

  // Fetch events (Google Calendar)
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
    const date = new Date(dateStr);

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
    });
  };

  return (
    <div className="events-page">
      <Header />

      <section className="events-layout">
        {/* LEFT – Free Resources */}
        <aside className="resources-section">
          <h2>Free Resources</h2>

          {loadingResources && <p>Loading resources...</p>}
          {!loadingResources && resources.length === 0 && (
            <p>No resources available.</p>
          )}

          {resources.map((r, index) => (
            <div className="resource-row" key={index}>
              <span className="resource-title">{r.Title}</span>

              {/* <span className="resource-desc">{r.Description}</span> */}

              <a
                href={r.FileLink}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-link"
              >
                View / Download
              </a>
            </div>
          ))}
        </aside>

        {/* RIGHT – Calendar + Events */}
        <div className="calendar-section">
          <h2>Upcoming Events</h2>

          {/* Google Calendar */}
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

          {/* Event List */}
          <div className="events-list">
            {loadingEvents && <p>Loading events...</p>}

            {!loadingEvents && events.length === 0 && (
              <p>No upcoming events.</p>
            )}

            {events.map((event) => (
              <div className="event-card" key={event.id}>
                {/* Event Date */}
                <span className="event-date">{formatEventDate(event)}</span>

                {/* Event Title */}
                <span className="event-title">{event.summary}</span>

                {/* Register Button */}
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

      <Footer />
    </div>
  );
}

export default Events;
