import {Field, Form} from "formik";
import {FunctionComponent, SFC} from "react";

const LoginForm = () => (
    <Form>
        <label htmlFor="login">Login</label>
        <Field id="login" name="login" placeholder="Type login..." type="text" />

        <label htmlFor="password">Password</label>
        <Field id="password" name="password" type="password" />

        <label htmlFor="cPassword">Confirm password</label>
        <Field id="cPassword" name="cPassword" type="password" />

        <button type="submit" style={{ display: 'block' }}>
            Login
        </button>
    </Form>
);

export default LoginForm;
