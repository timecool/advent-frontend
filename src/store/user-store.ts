import { IUserChallenge } from '@/model/user-challenge';
import create from 'zustand';


interface UserState {
  isAuth: boolean
  userChallenges: IUserChallenge[]
  setUserChallenges: (userChallenges: IUserChallenge[]) => void;
  setIsAuth: (isAuth: boolean) => void;
}

const UserStore = create<UserState>((set) => ({
  isAuth: false,
  userChallenges: [] ,
  setUserChallenges: (userChallenges: IUserChallenge[]) => set(() => ({ userChallenges })),
  setIsAuth: (isAuth: boolean) => set(() => ({ isAuth })),
}));


export default UserStore;