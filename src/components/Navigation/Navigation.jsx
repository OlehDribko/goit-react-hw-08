import { useSelector } from "react-redux";
import { isLoggedIn } from "../../redux/auth/Selectors";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  const selectIsLoggedIn = useSelector(isLoggedIn);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {selectIsLoggedIn && <NavLink to="/Contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
