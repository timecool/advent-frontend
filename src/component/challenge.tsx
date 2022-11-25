import map from 'lodash/map';
import { Fragment } from 'react';
import YouTube from 'react-youtube';

import type { IChallenge } from '@/model/challenge';
import type { IUserChallenge } from '@/model/user-challenge';

import UploadSection from './upload-section';

interface Props {
  challenge: IChallenge;
  uploads: IUserChallenge[];
}
const Challenge = (props: Props) => {
  const { challenge, uploads } = props;

  return (
    <div className="tk-karmina-sans overflow-hidden">
      <div className="text-center text-4xl font-bold">{challenge.title}</div>
      <div className="pt-5 text-center text-xl">{challenge.descriptions}</div>

      <div className="flex flex-col items-center justify-center gap-3 overflow-x-hidden pt-5 lg:flex-row xl:flex-row">
        {map(challenge.videoLinks, (video) => (
          <Fragment key={video}>
            <YouTube videoId={video} opts={{ height: 250, width: 450 }} />
          </Fragment>
        ))}
      </div>
      <div className="py-5">
        <div
          className="border-t-2 border-dotted "
          style={{ borderColor: '#1177ab' }}
        />
      </div>

      <div className="text-center text-2xl font-bold">Upload</div>
      <div className="grid grid-cols-1 pt-3 md:grid-cols-2 xl:px-20">
        <div className="flex items-center gap-5">
          <div className="relative w-12">
            <div
              className="h-12 w-12 items-center rounded-full"
              style={{ background: '#ea5172' }}
            >
              <div className="text-center text-2xl font-bold">
                {challenge.points}
              </div>
              <div className="-mt-2">Punkte</div>
            </div>
          </div>
          <div className="lg:w-2/3">
            Lade deine Datei hier hoch. Nach einer Überprüfung bekommst du die
            Punkte zugeschrieben.
          </div>
        </div>
        <div className="pt-5 md:pt-0">
          <UploadSection id={challenge.id} uploads={uploads} />
        </div>
      </div>
    </div>
  );
};

export default Challenge;
