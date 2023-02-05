import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [visibleLoader, setVisibleLoaler] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const { user } = userCredential;
          console.log(user);
          alert('ok');
          navigate('/homepage');
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === 'auth/user-not-found') {
            alert('Пользователь не найден');
          }
          if (errorCode === 'auth/wrong-password') {
            alert('Неверный пароль');
          }
        })
        .finally(() => {
          setVisibleLoaler(false);
        });
    },
  });

  return (
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
  );
};

export default Login;
