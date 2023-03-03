import { json, redirect } from "react-router-dom";

import EventForm from "../components/EventForm";

const NewEventPage = () => {
  return <EventForm />;
};

export default NewEventPage;

// still client side
// receives props automatically like loaders
export const action = async ({ request, params }) => {
  const data = await request.formData();

  const eventData = {
    // 'get' uses 'name' field from Form input
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    // returns response from backend
    console.log("erro 422");
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save event" }, { status: 500 });
  }

  return redirect("/events");
};
