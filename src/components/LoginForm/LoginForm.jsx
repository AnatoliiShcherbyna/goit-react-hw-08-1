import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { login } from '../../redux/auth/operations';
import css from "./LoginForm.module.css"


const LoginForm = () => {
  const dispatch = useDispatch();

    const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(login(values))
    .unwrap()
      .then(res => {
        toast(`Welcome, ${res.user.name}!`);
      })
      .catch(() => {
        toast.error('invalid credentials');
      });
    options.resetForm();
  }

    return (
    <div className="hero bg-base-200 min-h-screen">
        <Formik onSubmit={handleSubmit}
          initialValues={initialValues}
          className="card-body">
        <Form>
        <div className="form-control">
          <label className="label">
  <span className="label-text">email</span>
    <Field className={css.inputLogin} name='email' type="email" placeholder="email"  required />          
          </label>
        </div>
        <div className="form-control">
          <label className="label">
         <span className="label-text">password</span>
          <Field className={css.inputLogin} name='password' type="current-password" placeholder="password" required />                     
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Log In</button>
        </div>                            
        </Form>
      </Formik>
</div>
  )
}

export default LoginForm