import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

const EventsPage = () => {
  const data = useLoaderData();
  const events = data.events;

  return <EventsList events={events} />;
};

export default EventsPage;

// this is client side code
// can use fetch, local storage, etc
// cannot use react hooks
export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // TODO: handle incorrect response
  } else {
    return response;
  }
};
