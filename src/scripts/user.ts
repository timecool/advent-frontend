import axios from 'axios';

import UserPersistStore from '@/store/user-persist-store';
import UserStore from '@/store/user-store';

import { createHeader } from './header';

export const isAuth = async () => {
  const { token, setToken } = UserPersistStore.getState();
  const { setIsAuth, setUserChallenges } = UserStore.getState();
  if (!token) {
    setIsAuth(false);
    return;
  }

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/user/auth`,
    {},
    createHeader()
  );

  if (response.status === 200) {
    setToken(response.data.accessToken);
    setUserChallenges(response.data.challenges);
    setIsAuth(true);
    return;
  }
  setToken(undefined);
  setIsAuth(false);
};

export const login = async (username: string, password: string) => {
  const { setToken } = UserPersistStore.getState();
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/noauth/login`,
      { username, password }
    );

    if (response.status === 200) {
      setToken(response.data.accessToken);
      return undefined;
    }
    return response.data;
  } catch (error: any) {
    return error?.response.data.error;
  }
};

export const register = async (
  email: string,
  username: string,
  password: string
) => {
  const { setToken } = UserPersistStore.getState();
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/noauth/register`,
      {
        username,
        password,
        email,
      }
    );
    if (response.status === 200) {
      setToken(response.data.accessToken);
      return undefined;
    }
  } catch (error: any) {
    return error?.response.data.error;
  }

  return 'Something went wrong';
};

export const challenges = async (id: number, file: any) => {
  const { setUserChallenges } = UserStore.getState();

  const formData = new FormData();
  formData.append('file', file);

  try {
    const headers = {
      ...createHeader().headers,
      'Content-Type': 'multipart/form-data',
    };
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/challenges/user/${id}`,
      formData,
      {
        headers,
      }
    );
    if (response.status === 200) {
      setUserChallenges(response.data.challenges);
      return undefined;
    }
  } catch (error: any) {
    return error?.response.data.error;
  }

  return 'Something went wrong';
};

export const getUsers = async () => {
  try {
    const headers = {
      ...createHeader().headers,
    };
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/users`,
      {
        headers,
      }
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    return undefined;
  }
  return undefined;
};
