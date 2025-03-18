import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button, ThemeButton } from 'shared/ui';

import classes from './PageErrorBoundary.module.scss';

interface PageErrorBoundaryProps {
  className?: string;
}

export const PageErrorBoundary = ({ className }: PageErrorBoundaryProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <Suspense fallback="">
      <div className={classNames({ cls: classes.pageErrorBoundary, additional: [className] })}>
        <p className={classes.text}>{t('error.boundaryError')}</p>
        <Button theme={ThemeButton.OUTLINED} onClick={reloadPage}>{t('buttons.reload')}</Button>
      </div>
    </Suspense>
  );
};
