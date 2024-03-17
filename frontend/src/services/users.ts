import { SignInRequest, UserDetails } from "../definitions/Users";

const usersUrl = "/api/users";

export const signIn = async (data: SignInRequest) => {
  const response = await fetch(`api/users/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    return response;
  } catch (error: error) {
    alert(`${error.data.message || error.error} oopsies`);
  }
};

export const signOut = async () => {
  const response = await fetch(`${usersUrl}/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  try {
    return response;
  } catch (error: any) {
    alert(`${error.data.message || error.error} oopsies`);
  }
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
