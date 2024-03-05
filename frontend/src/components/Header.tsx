import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { clearCredentials } from "../slices/authSlice";

const Header: React.FC = () => {
  const userInfo = useSelector((state: any) => state.auth.userInfo);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout(userInfo).unwrap();
      dispatch(clearCredentials(userInfo));
      navigate("/");
    } catch (error) {
      alert("oopsies");
    }
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signin">Sign in</Link>
            </li>
            <li>
              {userInfo ? (
                <button onClick={handleLogout}>sign out</button>
              ) : null}
            </li>
            <li>{userInfo ? <Link to={"/profile"}>profile</Link> : null}</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
