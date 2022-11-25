import Image from 'next/image';
import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

import { challenges } from '@/scripts/user';

interface Props {
  id: number;
}

const Upload = (props: Props) => {
  const { id } = props;
  const [uploadFile, setUploadFile] = useState<File | null>();
  const handleChange = (file: File | null) => {
    setUploadFile(file);
  };

  const submit = () => {
    if (uploadFile) {
      challenges(id, uploadFile);
    }
  };
  return (
    <div className=" lg:flex-cols flex-rows flex gap-3">
      <div
        className="w-4/6 border border-dashed p-2"
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
        disabled={!uploadFile}
        className="px-16 py-3 font-bold "
        style={{ background: '#1177ab' }}
        onClick={submit}
      >
        Abschicken
      </button>
    </div>
  );
};

export default Upload;
