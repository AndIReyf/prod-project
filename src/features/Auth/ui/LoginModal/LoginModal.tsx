import { Suspense } from 'react';
import { Loader, MuiModal } from 'shared/ui';

import { LoginFormAsync } from '../../ui/LoginForm/LoginForm.async';

interface LoginModalProps {
  open: boolean;
  onClose: VoidFunction;
}

export const LoginModal = ({ open, onClose }: LoginModalProps) => (
  <MuiModal open={open} onClose={onClose}>
    <Suspense fallback={<Loader />}>
      <LoginFormAsync />
    </Suspense>
  </MuiModal>
);
