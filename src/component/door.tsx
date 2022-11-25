import filter from 'lodash/filter';
import Image from 'next/image';
import { useState } from 'react';

import type { IChallenge } from '@/model/challenge';
import UserStore from '@/store/user-store';

import Challenge from './challenge';
import Modal from './modal';
import RandomVideo from './random-video';

interface Props {
  day: number;
  challenge?: IChallenge;
}
const Door = (props: Props) => {
  const userChallenges = UserStore((state) => state.userChallenges);
  const [open, setOpen] = useState(false);
  const { day, challenge } = props;
  const allUploads = filter(
    userChallenges,
    (c) => c.challenge.id === challenge?.id
  );
  return (
    <>
      <Modal setting={{ open, setOpen }} day={day}>
        {challenge ? (
          <div className="relative overflow-auto">
            <Challenge challenge={challenge} uploads={allUploads} />
          </div>
        ) : (
          <RandomVideo />
        )}
      </Modal>
      <div
        className="relative h-56 w-56 cursor-pointer select-none"
        onClick={() => setOpen(true)}
        style={{ zIndex: 400 - day }}
      >
        <div className="item">
          <Image
            height={500}
            width={500}
            className="door"
            src={`/assets/images/${day + 1}.png`}
            alt={`Door-${day + 1}`}
          />
          <span className="shadow"></span>
        </div>
      </div>
    </>
  );
};

export default Door;
