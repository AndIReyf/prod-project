import { Counter } from 'features/Counter';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('pages.main')}
      <Counter />
    </div>
  );
};

export default MainPage;
