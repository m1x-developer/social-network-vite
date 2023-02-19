import React, { useState } from 'react';
import {
  Button,
  Group,
  Paper,
  PasswordInput,
  TextInput,
  Title,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';
import { useRegistrationStyles } from '../Registration/Registration.css';
import { SignUpFormValues } from '../types';
import { useAuth } from '../../../providers/AuthContext';

export const Login = () => {
  const { classes } = useRegistrationStyles();

  const { signIn } = useAuth();
  const [formError, setFormError] = useState<string>('');
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });

  const onSubmitForm = async (values: SignUpFormValues) => {
    setFormSubmitting(true);
    try {
      await signIn(values.email, values.password);
      navigate('/profile/');
    } catch (error: unknown) {
      console.log(error);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (error?.code === 'auth/user-not-found') {
        alert('Пользователь не найден');
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (error?.code === 'auth/invalid-email') {
        alert('Неверный логин или пароль');
      }
      let errorMessage = 'error.unknown';
      if (typeof error === 'string') {
        errorMessage = error.toUpperCase();
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      setFormError(errorMessage);
      setFormSubmitting(false);
    }
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title
          order={2}
          className={classes.title}
          align="center"
          mt="md"
          mb={50}
        >
          Login
        </Title>
        <form onSubmit={form.onSubmit((values) => onSubmitForm(values))}>
          <div style={{ maxWidth: 320, margin: 'auto' }}>
            <TextInput
              mt="md"
              label="Email"
              placeholder="Email"
              {...form.getInputProps('email')}
            />
            <PasswordInput
              mt="md"
              label="Password"
              placeholder="Password"
              type="password"
              {...form.getInputProps('password')}
            />

            <Group position="center" mt="xl">
              <Button variant="outline" type="submit">
                Sign in
              </Button>
              <Button onClick={() => navigate('/registration/')}>
                Register
              </Button>
            </Group>
          </div>
        </form>
      </Paper>
    </div>
  );
};
