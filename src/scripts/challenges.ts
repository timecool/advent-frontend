import type { AxiosResponse } from 'axios';
import axios from 'axios';

import type { IChallenge } from '@/model/challenge';

import { createHeader } from './header';

export const getChallenges = async () => {
  const response: AxiosResponse<IChallenge[]> = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/noauth/challenges`,
    createHeader()
  );

  if (response.status === 200) {
    return response.data;
  }
  return [];
};
