import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/Selectors";

const UserMenu = () => {
  const hendleLogout = () => {
    return;
  };

  const dispatch = useDispatch;
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
