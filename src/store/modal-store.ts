import create from 'zustand';

interface ModalState {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

const ModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  setIsModalOpen: (isModalOpen: boolean) => set(() => ({ isModalOpen })),
}));

export default ModalStore;
