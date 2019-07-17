import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

function UserForm({ values, errors, touched }) {
    return (
        <Form className="user-form" >
            <div className="field">
                <label htmlFor="name">Name: </label>
                <Field type="text" name="name" id="name" placeholder="name" />
                {touched.name && errors.name && <p>{errors.name}</p>}
            </div>
            <div className="field">
                <label htmlFor="email">Email: </label>
                <Field type="email" name="email" id="email" placeholder="email" />
                {touched.email && errors.email && <p>{errors.email}</p>}
            </div>
            <div className="field">
                <label htmlFor="password">Password: </label>
                <Field type="password" name="password" id="password" placeholder="password" />
                {touched.password && errors.password && <p>{errors.password}</p>}
            </div>
            <div className="field">
                <label htmlFor="tos">I accept Terms of Service</label>
                <Field type="checkbox" name="tos" id="tos" checked={values.tos}/>
            </div>
            <button>Submit</button>
        </Form>
    );
};

const FormikUserForm = withFormik({
    
    mapPropsToValues({ name, email, password, tos }) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            tos : tos || false
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
            // .name("Name not valid")
            .min(2, "Name must be 2 characters or longer")
            .required("Name is required"),
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        password: Yup.string()
            .min(8, "Password must be 8 characters or longer")
            .required("Password is required")
    }),

    handleSubmit(values) {
        console.log(values);
    }

})(UserForm);

export default FormikUserForm;