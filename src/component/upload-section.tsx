import last from 'lodash/last';

import type { IUserChallenge } from '@/model/user-challenge';
import UserStore from '@/store/user-store';

import Login from './login';
import Register from './register';
import Upload from './upload';

interface Props {
  id: number;
  uploads: IUserChallenge[];
}

const UploadSection = (props: Props) => {
  const { id, uploads } = props;
  const isAuth = UserStore((state) => state.isAuth);
  const lastUpload = last(uploads);
  if (!isAuth)
    return (
      <div>
        <Login />
        <Register />
      </div>
    );
  return (
    <div>
      {lastUpload ? (
        <div className="flex w-full  gap-3">
          <div
            className="border border-dashed p-2 "
            style={{ borderColor: '#1177ab' }}
          >
            {lastUpload.filePath} /{' '}
            {lastUpload.checked ? 'Erfolgreich' : 'Wurde noch nicht überprüft'}
          </div>
        </div>
      ) : (
        <Upload id={id} />
      )}
    </div>
  );
};

export default UploadSection;
