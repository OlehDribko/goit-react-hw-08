import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/Selectors";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/Contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
