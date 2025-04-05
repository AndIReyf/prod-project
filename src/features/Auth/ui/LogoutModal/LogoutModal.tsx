import { Box, Button, Typography } from '@mui/material';
import { useUserActions } from 'entities/User';
import { useTranslation } from 'react-i18next';
import { MuiModal } from 'shared/ui';

interface LoginModalProps {
  open: boolean;
  onClose: VoidFunction;
}

export const LogoutModal = ({ open, onClose }: LoginModalProps) => {
  const { t } = useTranslation();
  const { logout } = useUserActions();

  return (
    <MuiModal open={open} onClose={onClose}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography sx={{ marginBottom: 2 }} variant="h6">{t('auth.log_out_text')}</Typography>
        <Button sx={{ marginRight: 1 }} size="small" variant="outlined" onClick={logout}>{t('buttons.yes')}</Button>
        <Button size="small" variant="contained" onClick={onClose}>{t('buttons.no')}</Button>
      </Box>
    </MuiModal>
  );
};
