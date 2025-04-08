import { useFormik } from 'formik';
import {
  ReducersList, useAppDispatch, useAppSelector, useDynamicReducer,
} from 'shared/hooks';
import { InferType, object, string } from 'yup';

import { getPassword, getUsername } from '../selectors/loginSelectors';
import { loginByUserName } from '../services/loginByUserName';
import { loginReducer } from '../slice/loginSlice';

const validationSchema = object({
  name: string().required(),
  password: string().required(),
});

type InitialValuesType = InferType<typeof validationSchema>;

const reducersList: ReducersList = { login: loginReducer };

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

  useDynamicReducer(reducersList);

  return formik;
};
