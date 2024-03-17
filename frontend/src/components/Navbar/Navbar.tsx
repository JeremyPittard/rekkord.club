import { Link } from "@tanstack/react-router";
import { useStore } from "@tanstack/react-store";
import userStore from "../../store/userStore";
import { useLogout } from "../../hooks/useUser";

const Navbar = () => {
  const user = useStore(userStore, (store) => store);

  const logOut = useLogout();

  const handleLogOut = () => {
    logOut.mutateAsync();
  };
  console.log(user, "stored user");
  return (
    <>
      <header>
        <ul>
          <li>
            <Link
              to="/"
              activeProps={{
                className: "font-bold",
              }}
              activeOptions={{ exact: true }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              activeProps={{
                className: "font-bold",
              }}
            >
              About
            </Link>
          </li>
          {user._id ? (
            <li>
              <button type="button" onClick={handleLogOut}>
                Sign out
              </button>
            </li>
          ) : null}
        </ul>
      </header>
      <hr />
    </>
  );
};

export default Navbar;
