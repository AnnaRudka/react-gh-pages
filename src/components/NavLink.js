import { NavLink } from "react-router-dom";

const Navlink = (navlink) => {
  return (
    <NavLink to={navlink.pass} className="link-item" activeClassName="selected">
      {navlink.icon}
      {navlink.title}
    </NavLink>
  );
};

export default Navlink;
