export interface IUserWithTokens {
    refreshToken: string;
    accessToken: string;
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}