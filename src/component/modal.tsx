import Image from 'next/image';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

import ModalStore from '@/store/modal-store';

interface Props {
  children: ReactNode;
  day: number;
  setting: {
    open: boolean;
    setOpen: (open: boolean) => void;
  };
}
const Modal = (props: Props) => {
  const { children, setting, day } = props;

  const setIsModalOpen = ModalStore((state) => state.setIsModalOpen);

  useEffect(() => {
    setIsModalOpen(setting.open);
  }, [setting.open]);

  return (
    <>
      <div
        className="absolute top-0 left-0 h-full w-full opacity-90 shadow-xl"
        style={{ zIndex: 600, background: '#1a3a55' }}
        onClick={() => setting.setOpen(false)}
      />
      <div
        className="container absolute top-1/2 left-1/2 h-3/4 -translate-x-1/2 -translate-y-1/2 bg-white p-5"
        style={{ zIndex: 600, background: '#004b74' }}
      >
        <div className="borderimg relative h-full w-full">
          <Image
            src={`/assets/images/${day + 1}.png`}
            height={300}
            width={300}
            alt="Christmas"
            className="absolute -top-3 left-1/2  mx-auto w-28 -translate-x-1/2  -translate-y-1/2 rounded-full shadow-xl"
            style={{ zIndex: 603, background: '#004b74' }}
          />
          <div className="no-scrollbar h-full overflow-auto px-12 pt-16">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
