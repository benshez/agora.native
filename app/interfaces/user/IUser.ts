export interface IUser {
  id: number;
  entity: number;
  role: number;
  enabled: boolean;
  locked: boolean;
  username: string;
  usersurname: string;
  address: string;
  city: string;
  state: string;
  post_code: string;
  phone: string;
  email: string;
  website: string;
  facebook: string;
  twitter: string;
  logo: string;
  abn: string;
  token_char: string;
  token_expiry: string;
}

export interface IUserPost {
  username: string;
  email: string;
  password: string;
}
export interface ProfileState {
  user?: IUser;
  error: boolean;
}
