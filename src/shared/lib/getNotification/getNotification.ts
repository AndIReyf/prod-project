import { enqueueSnackbar, VariantType } from 'notistack';

export const getNotification = (variant: VariantType, message?: string): void => {
  if (variant === 'success') {
    enqueueSnackbar(message || 'Success!', { variant });
  }
  if (variant === 'warning') {
    enqueueSnackbar(message || 'Warning!', { variant });
  }
  if (variant === 'info') {
    enqueueSnackbar(message || 'Info!', { variant });
  }
  if (variant === 'error') {
    enqueueSnackbar(message || 'Error!', { variant });
  }
  if (variant === 'default') {
    enqueueSnackbar(message || 'Default!', { variant });
  }
};
