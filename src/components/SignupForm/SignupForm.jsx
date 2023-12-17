import { ErrorText, Input, Text, Container } from './SignupForm.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

let userSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(7).required(),
});

export const SignupForm = () => {
  const dispatch = useDispatch();

  const handleOnSubmit = (values, actions) => {
    const item = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(register(item))
      .then(unwrapResult)
      .catch(rejectedValueOrSerializedError => {
        toast.error(rejectedValueOrSerializedError);
      });
    actions.resetForm();
  };

  return (
    //
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={handleOnSubmit}
    >
      <Container>
        <Text>Name</Text>
        <Input type="name" name="name" title="name" />
        <ErrorMessage name="name">
          {() => <ErrorText>Wrong name</ErrorText>}
        </ErrorMessage>
        <Text>Email</Text>
        <Input type="email" name="email" title="email" />
        <ErrorMessage name="email">
          {() => <ErrorText>Wrong email</ErrorText>}
        </ErrorMessage>
        <Text>Password</Text>
        <Input type="password" name="password" title="password" />
        <ErrorMessage name="password">
          {() => <ErrorText>Wrong password</ErrorText>}
        </ErrorMessage>
        <Button
          style={{ margin: '0 auto' }}
          type="Submit"
          variant="contained"
          endIcon={<ChevronRightIcon />}
        >
          Sign up
        </Button>
      </Container>
    </Formik>
  );
};
