import { loginByUserName } from 'features/Auth/model/services/loginByUserName/loginByUserName';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { InferType, object, string } from 'yup';

import { getPassword, getUsername } from '../selectors/loginSelectors';

const validationSchema = object({
  name: string().required(),
  password: string().required(),
});

type InitialValuesType = InferType<typeof validationSchema>;

export const useLoginForm = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector(getUsername);
  const password = useAppSelector(getPassword);

  const initialValues: InitialValuesType = {
    name,
    password,
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
    onSubmit: ({ name, password }) => {
      dispatch(loginByUserName({ username: name, password }));
    },
  });

  return formik;
};
