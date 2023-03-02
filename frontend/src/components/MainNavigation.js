import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const navItems = [
    { title: "Home", path: "/", id: "i1", isEnd: true },
    { title: "Events", path: "/events", id: "i2", isEnd: true },
    // { title: "Event Detail", path: "events/:eventId", id: "i3", isEnd: true },
    // { title: "New Event", path: "events/new", id: "i4", isEnd: false },
    // {
    //   title: "Edit Event",
    //   path: "events/:eventId/edit",
    //   id: "i5",
    //   isEnd: false,
    // },
  ];

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) => {
                  return isActive ? classes.active : undefined;
                }}
                end={item.isEnd}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
