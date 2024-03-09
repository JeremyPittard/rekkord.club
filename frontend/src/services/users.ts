import { SignInRequest, UserDetails } from "../definitions/Users";

const usersUrl = "/api/users";

export const signIn = (data: SignInRequest) => {
  fetch(`${usersUrl}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const signOut = () => {
  fetch(`${usersUrl}/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const editUser = (data: UserDetails) => {
  fetch(`${usersUrl}/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
