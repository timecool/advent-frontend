import Image from 'next/image';
import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

import { challenges } from '@/scripts/user';

interface Props {
  id: number;
}

const Upload = (props: Props) => {
  const { id } = props;
  const [load, setLoad] = useState<boolean>(false);
  const [uploadFile, setUploadFile] = useState<File | null>();
  const handleChange = (file: File | null) => {
    setUploadFile(file);
  };

  const submit = async () => {
    if (uploadFile) {
      setLoad(true);
      await challenges(id, uploadFile);
      setLoad(false);
    }
  };
  return (
    <div className="flex flex-col gap-3 lg:flex-row">
      <div
        className="w-full border border-dashed p-2 lg:w-4/6"
        style={{ borderColor: '#1177ab' }}
      >
        <FileUploader handleChange={handleChange} name="file">
          <div className="flex w-full items-center gap-3 ">
            <Image
              src="/assets/images/upload.png"
              alt="Upload"
              height={25}
              width={31}
              className={'h-8 w-6'}
            />
            {uploadFile ? (
              <div className="w-full">
                {uploadFile.name}{' '}
                <span
                  className="float-right cursor-pointer"
                  onClick={() => setUploadFile(null)}
                >
                  X
                </span>
              </div>
            ) : (
              <> Hier klicken oder Datei per Drag & Drop hineinziehen</>
            )}
          </div>
        </FileUploader>
      </div>
      <button
        disabled={!uploadFile || load}
        className="px-16 py-3 font-bold"
        style={{ background: '#1177ab' }}
        onClick={submit}
      >
        {load ? 'Upload...' : 'Abschicken'}
      </button>
    </div>
  );
};

export default Upload;
