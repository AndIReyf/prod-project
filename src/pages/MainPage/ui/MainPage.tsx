import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('pages.main')}
    </div>
  );
};

export default MainPage;
