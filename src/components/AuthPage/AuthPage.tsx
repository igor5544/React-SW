import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { RegistrationForm } from '../RegistrationForm';
import { LoginForm } from '../LoginForm';
import styles from './AuthPage.module.css';
import { User } from '../../api/models/user';

/** Props interface */
interface Props {
  /** Auth condition */
  isAuth: boolean;
  /** Login func */
  login: (email: string, password: string) => void;
  /** Registration func */
  registration: (email: string, password: string) => void;
  /** Sending condition */
  isSending: boolean;
  /** Error */
  error: string;
  /** Close error func */
  closeError: () => void;
}

/** Auth page component */
export const AuthPage: React.FC<Props> = ({
  isAuth,
  login,
  registration,
  isSending,
  error,
  closeError
}) => {
  /** Active form condition */
  const [isLogin, setIsLogin] = useState(true);
  /** Form title */
  const title: string = isLogin ? 'Login' : 'Registration';
  /** Btn text */
  const btnText = isLogin ? 'Registration' : 'Login';

  /** Toggle active form */
  const toggleForm = () => {
    setIsLogin(!isLogin);
    closeError();
  }

  /** Login submit func */
  const onLogin = ({ email, password }: User): void => {
    login(email, password);
  }

  /** Registrate submit func */
  const onRegistrationt = ({ email, password }: User,): void => {
    registration(email, password);
  }

  /** Redirect login users */
  if (isAuth) {
    return <Redirect to='/films' />
  }

  const form = isLogin ?
    <LoginForm
      error={error}
      handleSubmit={onLogin}
      isLogin={isLogin}
      isSending={isSending}
      title={title}
    /> :
    <RegistrationForm
      error={error}
      handleSubmit={onRegistrationt}
      isSending={isSending}
      title={title}
    />;

  return (
    <section>
      <div>
        <h2 className="title">
          {title}
        </h2>
        {form}
        <button className={styles.toggleBtn} onClick={toggleForm}>
          {btnText}
        </button>
      </div>
    </section>
  )
}
