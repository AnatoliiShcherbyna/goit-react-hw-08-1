import { Formik, Form, Field } from "formik"
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import css from "./RegistrationForm.module.css"

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, options) => {
    console.log(values);
      dispatch(register(values))
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
       <div>
      <Formik initialValues={initialValues}
        onSubmit={handleSubmit}>
      <Form>
              <label>
                  <span>name</span>
                  <Field className={css.inputRegistarion} type="text" name="name" placeholder="name" />     
        </label>
              <label>
                <span>email</span>
               <Field className={css.inputRegistarion} type="email" name="email" placeholder="email"/>   
          </label>
                    <label>
                <span>password</span>
                <Field className={css.inputRegistarion} type="current-password" name="password" placeholder="password" />   
          </label>
          
			<button type="submit">Register</button>
		</Form>
    </Formik>
      </div>
  )
}

export default RegistrationForm