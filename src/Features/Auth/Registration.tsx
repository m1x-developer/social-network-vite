import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export const Registration = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const [visibleLoader, setVisibleLoaler] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      setVisibleLoaler(true);
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const { user } = userCredential;
          console.log(userCredential);

          alert('Вы успешно зарегистрировались');
          console.log(user);
          navigate('/profile');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorCode);
          if (errorCode === 'auth/weak-password') {
            alert('Пароль должен содержать не менее 6 символов');
          }
          if (errorCode === 'auth/email-already-in-use') {
            alert('Данный email уже зарегистрирован');
          }
        })
        .finally(() => {
          setVisibleLoaler(false);
        });
    },
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        id="loginForm"
        className="d-flex direction-column"
        method="post"
        name="loginForm"
      >
        <input
          placeholder="Email Address"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <input
          placeholder="Password"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <button type="submit" className="button submitButton">
          Submit
        </button>
      </form>
    </div>
  );
};
