import { Dispatch, SetStateAction, useState } from 'react';

type UseModalReturn = [
  boolean,
  {
    setModalState: Dispatch<SetStateAction<boolean>>;
    handleModalClose: VoidFunction;
    handleModalOpen: VoidFunction;
  }
];
type UseModal = (initState?: boolean) => UseModalReturn;

export const useModal: UseModal = (initState = false) => {
  const [state, setModalState] = useState(initState);

  const handlers = {
    setModalState,
    handleModalClose: () => setModalState(false),
    handleModalOpen: () => setModalState(true),
  };

  return [state, handlers];
};
