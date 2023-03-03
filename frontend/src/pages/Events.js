import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList";

const EventsPage = () => {
  const data = useLoaderData();

  // if (data.isError) return <p>{data.message}</p>;

  // const events = data.events;
  // return <EventsList events={events} />;
  return (
    // will show this fallback until data is loaded
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={data.events}>
        {/* This will appear when data fetching is complete */}
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
};

export default EventsPage;

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
    //   status: 500,
    // });
    throw json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    // this doesnt work with defer
    // return response;
    const resData = await response.json();
    return resData.events;
  }
};

// this is client side code
// can use fetch, local storage, etc
// cannot use react hooks
export const loader = () => {
  // can have multiple requests. here it just needs one.
  return defer({ events: loadEvents() });
};
