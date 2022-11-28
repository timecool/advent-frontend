import { map, reduce } from 'lodash';
import React from 'react';

import type { IUser } from '@/model/user';

interface Props {
  user: IUser;
}
const User = (props: Props) => {
  const { user } = props;

  const points = map(user.challenges, (p) =>
    p.checked ? p.challenge.points : 0
  );

  const totalPoints = reduce(points, (point, curr) => point + curr);

  return (
    <div>
      <span className="font-bold">{user.username}: </span>
      {totalPoints}
    </div>
  );
};

export default User;
