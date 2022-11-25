import { IChallenge } from '@/model/challenge';
import { getChallenges } from '@/scripts/challenges';
import { isAuth } from '@/scripts/user';
import map from 'lodash/map';
import range from 'lodash/range';
import { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall'
import Door from './component/door';
import moment from 'moment';
import Head from 'next/head';
import UserPersistStore from '@/store/user-persist-store';

const Index = () => {
  const [challenges, setChallenges] = useState<IChallenge[]>([])
  const token = UserPersistStore((state:any) => state.token)
  useEffect(()=> {
    getChallenges().then(d => setChallenges(d))
  },[])
  useEffect(()=> {
    isAuth()
  },[token])

  const getChallengeByDate = (door: number) => {
    return challenges.find(c => moment(c.day).format("YYYY-MM-DD") === moment(`2022-12-${door}`).format("YYYY-MM-DD"))

  }

  const doors = range(24);
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Adventskalender Byte5</title>
      </Head>
    <div className={`flex items-center justify-center h-screen`} style={{ background: '#1a3a55' }}>
        <div className="no-scrollbar h-screen overflow-x-hidden  overflow-y-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 py-3 gap-2 items-center justify-center" >

          {map(doors, (door) => (
            <Door key={door} day={door} challenge={getChallengeByDate(door+1)} />
          ))}
      </div>
      <Snowfall />
    </div>
    </div>
    
  );
};

export default Index;
