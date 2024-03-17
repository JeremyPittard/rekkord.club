import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SignInRequest } from "../definitions/Users";
import { useLogin } from "../hooks/useUser";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/signin")({
  component: SignInPage,
});

function SignInPage() {
  const navigate = useNavigate();

  const [details, setDetails] = useState<SignInRequest>({
    email: "",
    password: "",
  });

  const loginMutation = useLogin();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setDetails((previousDetails) => ({
      ...previousDetails,
      [id]: value,
    }));
  };

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginMutation.mutateAsync(details).then(() => navigate({ to: "/" }));
  };

  return (
    //    make this a proper component later
    <>
      <form onSubmit={handleSignIn}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" onChange={handleChange} />
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}
