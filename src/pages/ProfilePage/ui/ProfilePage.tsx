import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { ReducersList, useDynamicReducer } from 'shared/hooks';

const reducersList: ReducersList = { profile: profileReducer };

const ProfilePage = () => {
  const { t } = useTranslation();
  useDynamicReducer(reducersList);

  return (
    <div>{t('pages.profile')}</div>
  );
};

export default ProfilePage;
