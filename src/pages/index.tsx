import map from 'lodash/map';
import range from 'lodash/range';
import moment from 'moment';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';

import Door from '@/component/door';
import type { IChallenge } from '@/model/challenge';
import { getChallenges } from '@/scripts/challenges';
import { isAuth } from '@/scripts/user';
import UserPersistStore from '@/store/user-persist-store';

const Index = () => {
  const [challenges, setChallenges] = useState<IChallenge[]>([]);
  const token = UserPersistStore((state: any) => state.token);
  useEffect(() => {
    getChallenges().then((d) => setChallenges(d));
  }, []);
  useEffect(() => {
    isAuth();
  }, [token]);

  const getChallengeByDate = (door: number) => {
    return challenges.find(
      (c) =>
        moment(c.day).format('YYYY-MM-DD') ===
        moment(`2022-12-${door}`).format('YYYY-MM-DD')
    );
  };

  const doors = range(24);
  return (
    <div className="overflow-hidden">
      <Head>
        <title>byte5 Adventskalender</title>
      </Head>
      <div
        className={`flex h-screen items-center justify-center`}
        style={{ background: '#1a3a55' }}
      >
        <div className="no-scrollbar grid h-screen w-full items-center justify-center gap-2 overflow-y-auto overflow-x-hidden px-12 py-3 sm:w-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
          {map(doors, (door) => (
            <Door
              key={door}
              day={door}
              challenge={getChallengeByDate(door + 1)}
            />
          ))}
        </div>
      </div>
      <Snowfall />
    </div>
  );
};

export default Index;
