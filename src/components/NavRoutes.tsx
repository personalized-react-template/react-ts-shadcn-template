import { NavLink } from "react-router-dom";

type Routes = {
  path: string;
  label: string;
};

type RouteProps = {
  routes: Routes[];
};

const NavRoutes = ({ routes }: RouteProps) => {
  return routes.map((route, index) => (
    <NavLink
      key={index}
      to={route.path}
      className={({ isActive }) =>
        isActive
          ? "text-md font-bold transition-colors"
          : "text-sm font-medium transition-colors"
      }
    >
      {route.label.toUpperCase()}
    </NavLink>
  ));
};

export default NavRoutes;
