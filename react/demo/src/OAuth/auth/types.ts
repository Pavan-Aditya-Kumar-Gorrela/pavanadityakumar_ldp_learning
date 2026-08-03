export interface AppUser {
  email: string;
  name: string;
  picture: string;
  loginMethod: 'id-token' | 'access-token' | 'auth-code';
}
