import { Link, useSubmit } from "react-router-dom";

import classes from "./EventItem.module.css";

const EventItem = ({ event }) => {
  const submit = useSubmit();

  const startDeleteHandler = () => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      // first arg is data - that is automatically wrapped in formData object
      // here we dont need data, so it is set to null

      // seconda arg receives same values that wouldve been on Form
      submit(null, { method: "delete" });
    }
  };

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        {/** here button is not inside form, so action must be set programmaticaly */}
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
};

export default EventItem;
