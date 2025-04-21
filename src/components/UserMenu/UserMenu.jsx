import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();

  const hendleLogout = () => {
    return dispatch(logOut());
  };

  const user = useSelector(selectUser);
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={hendleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
