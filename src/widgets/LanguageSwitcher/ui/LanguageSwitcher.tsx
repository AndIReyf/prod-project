import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Translation } from 'shared/types/translation';
import { Button, ThemeButton } from 'shared/ui';

import classes from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
  shortLanguage?: boolean;
}

export const LanguageSwitcher = ({ className, shortLanguage }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  const toggleLanguage: VoidFunction = async () => {
    await i18n.changeLanguage(i18n.language === Translation.EN ? Translation.IT : Translation.EN);
  };

  return (
    <Button
      theme={ThemeButton.OUTLINED}
      className={classNames({ cls: classes.languageSwitcher, additional: [className] })}
      onClick={toggleLanguage}
    >
      {i18n.t(`buttons.langSwitcher.${i18n.language}`, { context: shortLanguage && 'short' })}
    </Button>
  );
};
