import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import {
  Button,
  Group,
  Paper,
  PasswordInput,
  TextInput,
  Title,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { useAuth } from '../../../providers/AuthContext';
import { useRegistrationStyles } from './Registration.css';
import { SignUpFormValues } from '../types';
import { db } from '../../../firebase';

export const Registration = () => {
  const { classes } = useRegistrationStyles();
  const [formError, setFormError] = useState<string>('');
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });

  const { signUp } = useAuth();
  const onSubmitForm = async (values: SignUpFormValues) => {
    try {
      const res = await signUp(values.email, values.password);

      await setDoc(doc(db, 'users', res.user.uid), {
        uid: res.user.uid,
        displayName: null,
        email: res.user.email,
        photoURL: null,
      });

      try {
        navigate('/profile/');
        console.log('🚀 ~ signup ok ', res);
      } catch (error) {
        console.log(`🚀 ~ signup error`, error);
      }
    } catch (error) {
      console.log(error);

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (error?.code === 'auth/weak-password') {
        alert('Пароль должен содержать не менее 6 символов');
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (error?.code === 'auth/email-already-in-use') {
        alert('Данный email уже зарегистрирован');
      }
      setFormError(formError);
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
          Registration
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
                register
              </Button>
            </Group>
          </div>
        </form>
      </Paper>
    </div>
  );
};
