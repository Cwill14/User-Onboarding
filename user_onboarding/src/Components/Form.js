import React from 'react';
import { withFormik, Form, Field } from 'formik';

const UserForm = () => {
    return (
        <Form className="user-form" >
            <Field type="text" name="name" placeholder="name"  className="field" />
            <Field type="email" name="email" placeholder="email"  className="field" />
            <Field type="password" name="password" placeholder="password"  className="field" />
            <label htmlFor="tos">I accept Terms of Service</label>
            <Field type="checkbox" name="tos" id="tos" className="field" />
            <button>Submit</button>
        </Form>
    );
};

const FormikUserForm = withFormik({
    
    mapPropsToValues({ name, email, password }) {
        return {
            name: name || "",
            email: email || "",
            password: password || ""
        };
    },

    handleSubmit(values) {
        console.log(values);
    }

})(UserForm);

export default FormikUserForm;