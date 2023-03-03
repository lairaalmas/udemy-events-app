import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import NewsletterSignup from "./NewsletterSignup";

const MainNavigation = () => {
  const navItems = [
    { title: "Home", path: "/", id: "i1", isEnd: true },
    { title: "Events", path: "/events", id: "i2", isEnd: true },
    { title: "Newsletter", path: "/newsletter", id: "i3", isEnd: true },
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
      <NewsletterSignup />
    </header>
  );
};

export default MainNavigation;
