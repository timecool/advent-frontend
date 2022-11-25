import ModalStore from '@/store/modal-store';
import Image from 'next/image'
import { ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode
  day:number
  setting: {
    open: boolean,
    setOpen: (open: boolean) => void
  }
}
const Modal = (props: Props) => {
  const { children, setting, day } = props

  const setIsModalOpen = ModalStore((state) => state.setIsModalOpen)

  useEffect(() => {
    setIsModalOpen(setting.open)
  }, [setting.open])


  if(!setting.open) return <></> 

  return (
    <>
      <div className='absolute w-full h-full top-0 left-0 opacity-90 shadow-xl' style={{ zIndex: 600, background: '#1a3a55' }} onClick={() => setting.setOpen(false)} />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white container h-3/4 p-5' style={{ zIndex: 600, background:"#004b74" }} >
        <div className='relative h-full w-full borderimg'>
        <Image src={`/assets/images/${day+1}.png`} height={300} width={300} alt="Christmas" className='w-28 -top-3 rounded-full  shadow-xl mx-auto absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ zIndex: 603, background:"#004b74" }} />
        <div className='pt-16 px-12 overflow-auto h-full no-scrollbar'>
          {children}
        </div>
      </div>
      </div>
    </>
  );
};

export default Modal;
