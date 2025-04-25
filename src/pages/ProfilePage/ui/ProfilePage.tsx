import { fetchProfileData, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ReducersList, useAppDispatch, useDynamicReducer } from 'shared/hooks';

const reducersList: ReducersList = { profile: profileReducer };

const ProfilePage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  useDynamicReducer(reducersList);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, []);

  return (
    <div>{t('pages.profile')}</div>
  );
};

export default ProfilePage;
