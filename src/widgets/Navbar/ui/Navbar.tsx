import { getUserAuthDataSelectors } from 'entities/User';
import { LoginModal, LogoutModal } from 'features/Auth';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector, useModal } from 'shared/hooks';
import { classNames } from 'shared/lib';
import { Button, ThemeButton } from 'shared/ui';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isModalOpen, { handleModalOpen, handleModalClose }] = useModal();
  const authData = useAppSelector(getUserAuthDataSelectors);

  useEffect(() => {
    handleModalClose();
  }, [authData]);

  return (
    <div className={classNames({ cls: classes.navbar, additional: [className] })}>
      <div className={classes.linksWrapper}>
        <Button onClick={handleModalOpen} theme={ThemeButton.OUTLINED}>
          {t('auth.log', { context: authData ? 'out' : 'in' })}
        </Button>
      </div>
      {authData
        ? <LogoutModal open={isModalOpen} onClose={handleModalClose} />
        : <LoginModal open={isModalOpen} onClose={handleModalClose} />}
    </div>
  );
};
