import { Button as MuiButton, TextField, Typography } from '@mui/material';
import { getAuthDataError, getIsAuthDataLoading } from 'features/Auth/model/selectors/loginSelectors';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'shared/hooks';
import { classNames } from 'shared/lib';

import { useLoginFormActions } from '../../model/actions/useLoginFormActions';
import { useLoginForm } from '../../model/hooks/useLoginForm';

import classes from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const isLoading = useAppSelector(getIsAuthDataLoading);
  const authDataError = useAppSelector(getAuthDataError);
  const { setUsername, setPassword } = useLoginFormActions();
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    touched,
  } = useLoginForm();

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
    handleChange(e);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
    handleChange(e);
  };

  return (
    <form className={classNames({ additional: [className] })}>
      <TextField
        type="text"
        name="name"
        sx={{ marginBottom: 2 }}
        label={t('fields.name')}
        variant="standard"
        size="small"
        value={values.name}
        onChange={onNameChange}
        onBlur={handleBlur}
        error={!!errors?.name && touched.name}
        helperText={touched.name && errors.name}
        fullWidth
        required
      />
      <TextField
        type="password"
        name="password"
        label={t('fields.password')}
        variant="standard"
        size="small"
        value={values.password}
        onChange={onPasswordChange}
        onBlur={handleBlur}
        error={!!errors?.password && touched.password}
        helperText={touched.password && errors.password}
        fullWidth
        required
      />
      <MuiButton
        className={classes.submitBtn}
        sx={{ marginTop: 2 }}
        variant="contained"
        disabled={!isValid || isLoading}
        onClick={(): void => handleSubmit()}
      >
        {t('auth.log', { context: 'in' })}
      </MuiButton>
      {authDataError && <Typography sx={{ marginTop: 2 }}>{t('error.authData')}</Typography>}
    </form>
  );
};

export default LoginForm;
