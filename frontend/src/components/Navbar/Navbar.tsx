import { Link } from "@tanstack/react-router";

const Navbar = () => {
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
          <li>
            <button type="button">Sign out</button>
          </li>
        </ul>
      </header>
      <hr />
    </>
  );
};

export default Navbar;
