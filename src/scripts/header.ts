import UserPersistStore from '@/store/user-persist-store';

export const createHeader = () => {
  const { token } = UserPersistStore.getState();
  return { headers: { Authorization: `Bearer ${token}` } };
};
