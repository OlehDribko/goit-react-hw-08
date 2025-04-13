import { useSelector } from "react-redux";
import { isLoggedIn } from "../../redux/auth/Selectors";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const selectIsLoggedIn = useSelector(isLoggedIn);

  return (
    <header>
      <Navigation />
      {selectIsLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
