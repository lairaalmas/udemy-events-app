import { Suspense } from "react";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

const loadEvent = async (id) => {
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event!" },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
};

// COPY OF THE FUNCTION ON EVENTS.JS TO SHOW DEFER FOR MULTIPLE FETCHING
const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

/** this code will show the page,
 * then show loading feedback for both components */

// export const loader = ({ request, params }) => {
//   const id = params.eventId;
//   return defer({ event: loadEvent(id), events: loadEvents() });
// };

/** this code will wait for first component to be loaded,
 * show the page,
 * then show loading feedback for second component */

export const loader = async ({ request, params }) => {
  const id = params.eventId;

  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
};

export const action = async ({ params, request }) => {
  const id = params.eventId;

  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event!" }, { status: 500 });
  } else {
    return redirect("/events");
  }
};
