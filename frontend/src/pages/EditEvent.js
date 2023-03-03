import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";

const EditEventPage = () => {
  // this hook is like useLoaderData but accepts route id as arg
  const data = useRouteLoaderData("event-detail");

  return <EventForm event={data.event} />;
};

export default EditEventPage;
