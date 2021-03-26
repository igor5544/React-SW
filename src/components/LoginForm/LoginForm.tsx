import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { AuthForm } from '../AuthForm';
import { User } from '../../api/models/user';

/** Props interface */
interface Props {
  /** Submit func */
  handleSubmit: ({ email, password }: User) => void;
  /** Title */
  title: string;
  /** Login condition */
  isLogin?: boolean;
  /** Error */
  error: string;
  /** Sending condition */
  isSending: boolean;
}

/** Login form component */
export const LoginForm: React.FC<Props> = ({ handleSubmit, ...props }) => {
  /** Login validators */
  const registrateValidations = Yup.object({
    email: Yup.string()
      .required('Required'),
    password: Yup.string()
      .required('Required'),
  });

  /** Start values */
  const fields: User = {
    email: '',
    password: '',
  }

  return (
    <Formik
      initialValues={fields}
      onSubmit={handleSubmit}
      validationSchema={registrateValidations}
    >
      <AuthForm {...props} />
    </Formik>
  )
}
