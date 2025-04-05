import { MuiModal } from 'shared/ui';

import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  open: boolean;
  onClose: VoidFunction;
}

export const LoginModal = ({ open, onClose }: LoginModalProps) => (
  <MuiModal open={open} onClose={onClose}>
    <LoginForm />
  </MuiModal>
);
