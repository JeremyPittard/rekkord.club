import { useMutation } from "@tanstack/react-query";
import userStore from "../store/userStore";
import { signIn, signOut } from "../services/users"; // Assuming apiCalls.ts is in a sibling folder
import { SignInRequest } from "../definitions/Users";

// ... other code

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: SignInRequest) => signIn(data),
    onSuccess: async (data) => {
      const userInfo = await data?.json();
      userStore.setState((state) => {
        return { ...state, ...userInfo };
      });
    },
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: () => signOut(),
    onSuccess: () =>
      userStore.setState(() => {
        return { _id: "", name: "", email: "" };
      }),
  });
};
