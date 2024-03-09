export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignUpRequest extends SignInRequest {
  email: string;
}

export interface UserDetails {
  _id: string;
  email: string;
  name: string;
  password?: string;
}
