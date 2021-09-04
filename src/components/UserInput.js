import React, { Component } from 'react';
import { Field } from './Field';
import { Formik, Form } from 'formik';
import { Form as FM, Button } from 'react-bootstrap';
import '../css/CustomForm.css';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
class UserInput extends Component {
    state = {
        email: this.props.title ? this.props.User.email : "",
        fist_name: this.props.title ? this.props.User.fist_name : "",
        last_name: this.props.title ? this.props.User.last_name : "",
        pwd: this.props.title ? this.props.User.pwd : "",
        username: this.props.title ? this.props.User.username : ""
    };

    handleSubmit = (e) => {
        // e.preventDefault();
        this.props.addNewUser(e);

    }

    validate = Yup.object({
        firstName: Yup.string().max(20, "Must be 20 characters or less").required('This is a Required field'),
        lastName: Yup.string().max(20, "Must be 20 characters or less").required('This is a Required field'),
        username: Yup.string().max(15, "Must be 20 characters or less").required('This is a Required field'),
        email: Yup.string().email('Email is Invalid').required('Email is Required').test('unique', 'Email already exist', (e) => {
            if (!this.props.title) {
                return (this.props.allUsers.filter((user) => {
                    return user.email === e
                }).length === 1 ? false : true)
            } else {return true}
            
        }),
        password: Yup.string().min(5, "Password Must be atleast 5 characters or more").required('Password is required')
    })
    render() {
        return (
            <Formik
                // initialValues={{
                //     firstName: "",
                //     lastName: "",
                //     username: "",
                //     email: "",
                //     password: ""
                // }}
                initialValues={this.state}
                validationSchema={this.validate}
                onSubmit={e => this.handleSubmit(e)}
            >
                {formik => (
                    <div className="Custom_form ">
                        <h1 className=" font-weight-bold-display-4">{this.props.title ? this.props.title : "Add New User"}</h1>
                        <hr />
                        <Form>
                            <Field id={this.props.dis && "disabled"}
                                value={this.props.title && (this.state.fist_name || this.props.User.first_name) }
                                label="First Name" name="firstName" type="text"  className="disabled"/>
                            <Field id={this.props.dis && "disabled"}
                                value={this.props.title && this.state.last_name}
                                label="Last Name" name="lastName" type="text"  />
                            <Field id={this.props.dis && "disabled"}
                                value={ this.props.title && this.state.username}
                                label="User Name" name="username" type="text"  />
                            <FM.Label>Profiles</FM.Label>
                            <FM.Select className="mb-3" id="dis" disabled><option>Select</option></FM.Select>
                            <Field id={this.props.dis ? "disabled" : "formBasicEmail"}
                                value={this.props.title && this.state.email}
                                label="Email" name="email" type="text"  />
                            <Field id={this.props.dis ? "disabled" : "formBasicPassword" }
                                value={this.props.title && this.state.pwd}
                                label="Password" name="password" type="password" />
                            <Button className={`btn btn-dark mt-3 mr-6 ${this.props.dis ? 'd-none' : ''}`} variant="primary" type="submit">Submit</Button>
                            
                        </Form>
                    </div>
                )}
            </Formik >
        );
    }
}
export default UserInput;
