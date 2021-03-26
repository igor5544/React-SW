import React from 'react';
import { Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Field, Form } from 'formik';
import { InputControl } from '../common/FormContols';
import styles from './AuthForm.module.css';

/** Props interface */
interface Props {
  /** Title */
  title: string;
  /** Login condition */
  isLogin?: boolean;
  /** Error */
  error: string;
  /** Sending condition */
  isSending: boolean;
}

/** Auth form component */
export const AuthForm: React.FC<Props> = ({ title, isLogin = false, error, isSending }) => {
  const registrationPassword = !isLogin &&
    <Field
      component={InputControl}
      name="repeatPassword"
      placeholder="Repeat password"
      type="password"
    />

  const errorAlert = error &&
    <Alert className={styles.alert} severity="error">
      {error}
    </Alert>


  return (
    <Form className={styles.form}>
      <Field
        autoComplete="on"
        component={InputControl}
        name="email"
        placeholder="Email"
        type="email"
      />
      <Field
        component={InputControl}
        name="password"
        placeholder="Password"
        type="password"
      />
      {registrationPassword}
      {errorAlert}
      <Button
        color="secondary"
        disabled={isSending}
        type="submit"
        variant="outlined"
        fullWidth
      >
        {title}
      </Button>
    </Form>
  )
}
