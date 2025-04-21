import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
const LoginForm = () => {
  const dispatch = useDispatch();
  const hendleSubmit = (value, actions) => {
    dispatch(logIn(value));
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={hendleSubmit}>
      <Form className={css.form}>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
