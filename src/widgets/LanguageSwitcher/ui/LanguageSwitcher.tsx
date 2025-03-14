import {JSX} from 'react';
import {classNames} from 'shared/lib';
import classes from './LanguageSwitcher.module.scss';
import {Button} from "shared/ui";
import i18n from 'shared/config/i18n/i18n';
import {useTranslation} from "react-i18next";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({className}: LanguageSwitcherProps): JSX.Element => {
  const {t} = useTranslation();

  const toggleLanguage: VoidFunction = () => i18n.changeLanguage(i18n.language === 'en' ? 'it' : 'en');

  return (
    <Button
      className={classNames({cls: classes.languageSwitcher, additional: [className]})}
      onClick={toggleLanguage}
    >
      {t('buttons.langSwitcher.en')}
    </Button>
  )
}