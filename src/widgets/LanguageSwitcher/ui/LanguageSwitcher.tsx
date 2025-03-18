import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';

import classes from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  const toggleLanguage: VoidFunction = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'it' : 'en');
  };

  return (
    <Button
      className={classNames({ cls: classes.languageSwitcher, additional: [className] })}
      onClick={toggleLanguage}
    >
      {i18n.t('buttons.langSwitcher.en')}
    </Button>
  );
};
