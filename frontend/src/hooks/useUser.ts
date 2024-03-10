import { useMutation } from "@tanstack/react-query";
import userStore from "../store/userStore";
import { signIn } from "../services/users"; // Assuming apiCalls.ts is in a sibling folder
import { SignInRequest, UserDetails } from "../definitions/Users";

// ... other code

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: SignInRequest) => signIn(data).then(),
    onSuccess: (data) => console.log(data),
  });
};
