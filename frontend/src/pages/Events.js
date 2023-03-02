import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

const EventsPage = () => {
  const data = useLoaderData();

  if (data.isError) return <p>{data.message}</p>;

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
    return { isError: true, message: "Could not fetch events." };
  } else {
    return response;
  }
};
