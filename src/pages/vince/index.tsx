import { map } from 'lodash';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import User from '@/component/users';
import type { IUser } from '@/model/user';
import { getUsers, isAuth } from '@/scripts/user';
import UserPersistStore from '@/store/user-persist-store';

const Index = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const token = UserPersistStore((state: any) => state.token);
  useEffect(() => {
    getUsers().then((d) => setUsers(d));
  }, []);
  useEffect(() => {
    isAuth();
  }, [token]);

  return (
    <div className="overflow-hidden">
      <Head>
        <title>byte5 Adventskalender</title>
      </Head>
      <div className={`flex h-screen `} style={{ background: '#1a3a55' }}>
        <div className="no-scrollbar px-12 py-3">
          {map(users, (user) => (
            <User user={user} key={user.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
