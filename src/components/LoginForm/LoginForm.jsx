import { Field, Formik } from "formik";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();
  const hendleSubmit = (value, actions) => {
    dispatch();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={hendleSubmit}>
      <form action="">
        <label type="email" name="email">
          email <Field type="email" name="email" />
        </label>
        <label type="password" name="password">
          password <Field type="password" name="password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </Formik>
  );
};

export default LoginForm;
