import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { title: "Dummy event 1", id: "e1" },
  { title: "Dummy event 2", id: "e2" },
  { title: "Dummy event 3", id: "e3" },
  { title: "Dummy event 4", id: "e4" },
  { title: "Dummy event 5", id: "e5" },
];

const EventsPage = () => {
  return (
    <>
      <h1>Events page</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
