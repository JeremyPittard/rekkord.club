import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";

// move these when fleshing out
export interface UserDetails {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [details, setDetails] = useState<UserDetails>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await login(details).unwrap();
      dispatch(setCredentials(response));
      navigate("/");
    } catch (error: any) {
      alert(`${error.data.message || error.error} oopsies`);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setDetails((previousDetails) => ({
      ...previousDetails,
      [id]: value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="email">username</label>
          <input
            type="text"
            id="email"
            onChange={handleChange}
            value={details.email}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            value={details.password}
          />
        </fieldset>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default LoginForm;
