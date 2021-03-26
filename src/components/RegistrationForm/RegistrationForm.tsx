import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { User } from '../../api/models/user';
import { passwordsMatch } from '../../utils/validators';
import { AuthForm } from '../AuthForm';

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

/** Interface for registration data */
interface RegData extends User {
  /** Second password */
  repeatPassword: string;
}

/** Registration form component */
export const RegistrationForm: React.FC<Props> = ({ handleSubmit, ...props }) => {
  /** Registration validators */
  const registrateValidations = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(9, 'Must be 9 characters or more')
      .required('Required'),
    repeatPassword: Yup.string()
      .min(9, 'Must be 9 characters or more')
      .test('check password', 'Passwords don\'t match', passwordsMatch)
      .required('Required'),
  });

  /** Start values */
  const fields: RegData = {
    email: '',
    password: '',
    repeatPassword: '',
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
