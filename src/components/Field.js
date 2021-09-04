import React from 'react';
import {ErrorMessage, useField } from 'formik';
import { Form } from 'react-bootstrap'


export const Field = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="mb-2">
                <Form.Group className="mb-3">
                <Form.Label htmlFor={field.name}>{label}</Form.Label>
                <Form.Control  className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
                    {...field} {...props}
                        placeholder={"Enter Your " + label} value={props.value} />
                <div id='Custom-alert' className={`${meta.touched && meta.error && 'alert alert-danger'}`}><ErrorMessage className="alert alert-danger" role="alert" name={field.name}></ErrorMessage></div>
                </Form.Group>
               
        </div>
    )
}