import React from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { minLength, required, composeValidators } from '../../validators/validators';
import style from "./login.module.css";
import { login, logout } from "../Redux/Auth_Reduser"
import { Redirect } from 'react-router-dom';
import { FORM_ERROR } from 'final-form';

const Login = (props) => {
  if (props.isAuth) {
    return <Redirect to="/profile" />
  }
  return <div>
    <h1>Login</h1>
    <MyForm {...props} />
  </div>
}


const MyForm = ({ login, loginError, captchaUrl }) => (
  <Form
    onSubmit={values => {
      login(values.email, values.password, values.rememberMe, values.captcha);
      return { [FORM_ERROR]: loginError }
    }}
    render={({ handleSubmit, form, submitting, pristine, submitError }) => (
      <form onSubmit={handleSubmit}>
        <div className={style.form}>
          <div>
            <Field name="email" component="input" validate={required}>
              {({ input, meta }) => (
                <div className={style.formControl}>
                  <input {...input} type="text" placeholder="email" />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
          </div>
          <div>
            <Field name="password" component="input" validate={composeValidators(required, minLength(5))}>
              {({ input, meta }) => (
                <div className={style.formControl}>
                  <input {...input} type="password" placeholder="password" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>
          {submitError && <div>{submitError}</div>}
          <div>
            <Field name="rememberMe" component="input" type="checkbox" />remember me
          </div>
        </div>

        {captchaUrl ? <img src={captchaUrl} alt="captch_image"/> : undefined}
        {captchaUrl ? <div>
            <Field name="captcha" component="input" type="text" />symbols from image
          </div>
           : undefined}
        

        <button type="submit" disabled={submitting || pristine}>submit</button>
        <button type="button" onClick={form.reset} disabled={submitting || pristine}>reset</button>
      </form>
    )}
  />
)


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  loginError: state.auth.loginError,
  captchaUrl: state.auth.captchaUrl
})


export default connect(mapStateToProps, { login, logout })(Login);