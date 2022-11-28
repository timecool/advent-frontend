import type { IUserChallenge } from './user-challenge';

export interface IUser {
  id: number;
  username: string;
  email: string;
  password?: any;
  roles: Role[];
  challenges: IUserChallenge[];
}

interface Role {
  id: number;
  name: string;
}
