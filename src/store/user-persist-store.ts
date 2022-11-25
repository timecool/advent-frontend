import create from 'zustand';
import { persist } from 'zustand/middleware';

const UserPersistStore = create<any>(
  persist(
    (set) => ({
      token: '',
      setToken: (token: string) => set(() => ({ token })),
    }),
    { name: 'user' }
  )
);

export default UserPersistStore;
