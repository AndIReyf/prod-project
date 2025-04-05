import { i18n } from 'shared/config/i18n/i18n';

export const LOGIN_NOTIFICATION = {
  success: i18n.t('notification.login.success'),
  error: i18n.t('notification.login.error'),
  warning: i18n.t('notification.login.warning'),
} as const;
