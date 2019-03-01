import {Component, ReactNode} from "react";
import { Formik, FormikActions } from 'formik';
import LoginForm from "../../components/forms/login";

interface ILoginForm {
    login: string;
    password: string;
}

class Login extends Component {
    private initialValues: ILoginForm = {
        login: '',
        password: '',
    };

    constructor(props: {}) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    private onSubmit(values: ILoginForm, { setSubmitting }: FormikActions<ILoginForm>) {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 500);
    }

    public render(): ReactNode {
        return (
            <Formik
                initialValues={this.initialValues}
                onSubmit={this.onSubmit}
                render={LoginForm}
            />
        );
    }
}

export default Login;
