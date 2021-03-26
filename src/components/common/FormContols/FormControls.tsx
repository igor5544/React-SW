import { Input, Select, TextareaAutosize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import { ErrorMessage } from 'formik';
import React from 'react';
import styles from './FormsControls.module.css';

/** Add styles for material-ui components */
const useStyles = makeStyles({
  control: {
    marginBottom: '10px',
  },
  textarea: {
    display: 'block',
    width: '100%',
    marginTop: '10px',
    resize: 'none',
    border: 'none',
    borderBottom: '2px solid rgba(0, 0, 0, 0.22)',
    '&:hover': {
      outline: 'none',
      borderBottomColor: '#000000'
    },
    '&:focus': {
      outline: 'none',
      borderBottomColor: '#f50057'
    }
  },
});

/** Error alert component */
const ErrorALert: React.FC = ({ children }) => (
  <Alert severity="error"> {children} </Alert>
)


/** Input control component */
export const InputControl: React.FC = ({ field, form, ...props }: any) => {
  const classes = useStyles();

  return (
    <div className={styles.fieldWrapper}>
      <Input
        className={classes.control}
        fullWidth
        {...field}
        {...props}
        color="secondary"
      />
      <ErrorMessage component={ErrorALert} name={field.name} />
    </div>
  )
}

/** Input control component with lable */
export const InputLabelControl: React.FC = ({ field, form, label, ...props }: any) => {
  const classes = useStyles();

  return (
    <div className={styles.fieldWrapper}>
      <label>
        {label}:
        <Input
          className={classes.control}
          fullWidth
          {...field}
          {...props}
          color="secondary"
        />
        <ErrorMessage component={ErrorALert} name={field.name} />
      </label>
    </div>
  )
}

/** Selector control component with lable */
export const SelectLabelControl: React.FC = ({ field, form, label, ...props }: any) => {
  const classes = useStyles();

  return (
    <div className={styles.fieldWrapper}>
      <label>
        {label}:
        <Select
          className={classes.control}
          fullWidth
          {...field}
          {...props}
          color="secondary"
        />
        <ErrorMessage component={ErrorALert} name={field.name} />
      </label>
    </div>
  )
}

/** Textarea control component with lable */
export const TextareaLabelControl: React.FC = ({ field, form, label, ...props }: any) => {
  const classes = useStyles();

  return (
    <div className={styles.fieldWrapper}>
      <label>
        {label}:
        <TextareaAutosize
          className={classes.textarea}
          {...field}
          {...props}
          color="secondary"
        />
        <ErrorMessage component={ErrorALert} name={field.name} />
      </label>
    </div>
  )
}
